import React from 'react';

function FormField({
	labelName,
	type,
	name,
	placeHolder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}) {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className='block text-sm font-medium text-gray-900'>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
						type='button'
						onClick={handleSurpriseMe}>
						Surprise Me
					</button>
				)}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeHolder}
				value={value}
				required
			/>
		</div>
	);
}

export default FormField;
