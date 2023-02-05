import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField } from '../components';

function CreatePost() {
	const navigate = useNavigate();
	const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {};
	const handleChange = (e) => {};
	const handleSurpriseMe = () => {};

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
						placeHolder='A plush toy robot sitting against a yellow wall'
						value={form.name}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
				</div>
			</form>
		</section>
	);
}

export default CreatePost;
