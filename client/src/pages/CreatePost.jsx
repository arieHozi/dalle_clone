import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

function CreatePost() {
	const navigate = useNavigate();
	const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		console.log(e);

		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	};
	const generateImage = async () => {
		if (form.prompt) {
			try {
				setGeneratingImg(true);
				const apiUrl = 'http://localhost:8080/api/v1/dalle';
				const response = await fetch(apiUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ prompt: form.prompt }),
				});
				const data = await response.json();

				setForm({ ...form, photo: `data:image/jpeg;base64,${data.image}` });
			} catch (error) {
				alert(error);
			} finally {
				setGeneratingImg(false);
			}
		} else {
			alert('Please enter prompt');
		}
	};
	const handleSubmit = () => {
		debugger;
	};

	return (
		<section className='max-w-71 mx-auto'>
			<div>
				<h1 className='font-extrabold text-[32px]'>Create</h1>
				<p className='mt-2 text-[#666e74] text-[16px] max-w[500px]'>
					Create imagiative and visually stunning images through DALL-E AI
				</p>
			</div>
			<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-5'>
					<FormField
						labelName='Your Name'
						type='text'
						name='name'
						placeHolder='Arik hozi'
						value={form.name}
						handleChange={handleChange}
					/>
					<FormField
						labelName='prompt'
						type='text'
						name='prompt'
						placeHolder={form.prompt}
						value={form.text}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
					<div className='reletive bg-gary-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.photo}
								className='w-full h-full object-contain'
							/>
						) : (
							<img
								src={preview}
								alt='preview'
								className='w-9/12 h-9/12 object-contain opacity-40'
							/>
						)}
						{generatingImg && (
							<div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
								<Loader />
							</div>
						)}
					</div>
					<div className='mt-5 flex gap-5'>
						<button
							type='button'
							onClick={generateImage}
							className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
							{generatingImg ? 'Generating ....' : 'Generate'}
						</button>
					</div>
					<div className='mt-10'>
						<p className='mt-2 text-[#666e75] text-[14px]'>
							Once you have created the image you want, youcan shere it with
							others in the community
						</p>
						<button
							type='submit'
							className='text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3 text-white bg-[#6469ff] rounded-md font-medium'>
							{loading ? 'Sharing...' : 'Share with the community'}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default CreatePost;
