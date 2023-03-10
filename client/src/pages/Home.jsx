import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Loader, Card, FormField } from '../components';

function Home() {
	const [loading, isLoading] = useState(false);
	const [allPosts, setAllPosts] = useState([null]);
	const [searchText, setSearchText] = useState('asasa');

	const RenderCards = ({ data, title }) => {
		if (data?.length > 0) {
			return data.map((post) => <Card key={post._id} {...post} />);
		}
		return <h2 className='mt-5 font-bold text-[#6449ff] uppercase'>{title}</h2>;
	};

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[32px]'>The Community Showcase</h1>
				<p className='mt-2 text-[#666e74] text-[16px] max-w[500px]'>
					Browes through a collection of imagiative and visually stunning images
					generated by DALL-E AI
				</p>
			</div>

			<div className='mt-16'>
				<FormField />
			</div>

			<div className='mt-10'>
				{loading ? (
					<div className='flex justify-center items-center'>
						<Spin />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className='font-medium text-[#666e75] text-xl mb-3'>
								Showing results for{' '}
								<span className='text-[#222328]'>{searchText}</span>
							</h2>
						)}
						<div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
							{searchText ? (
								<RenderCards data={[]} title='No results Found' />
							) : (
								<RenderCards data={[]} title='No Post Found' />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default Home;
