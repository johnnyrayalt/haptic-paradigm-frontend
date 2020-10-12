import React from 'react';
import { useSelector } from 'react-redux';

const Dropdown = (props: {
	title: string;
	description: string;
	options: { text: string; value: any }[];
	callback: (e: any) => void;
}) => {
	const { title, description, options, callback } = props;

	const state = useSelector((state: any) => state.keyboardMode.value);

	const assembleOptions = (options: { text: string; value: any }[]) => {
		const optionsArray: JSX.Element[] = [];
		options.map((opt) => {
			optionsArray.push(
				<option key={opt.text} className='dropdown-option selectable' value={opt.value}>
					{opt.text}
				</option>,
			);

			return optionsArray;
		});
		return optionsArray;
	};

	return (
		<div className='dropdown-container'>
			<select
				value={state === '' ? description : state}
				className='dropdown-select'
				onChange={(e) => callback(e.target.value)}
			>
				<option className='dropdown-option title' value={description} disabled={true}>
					{title}
				</option>
				{assembleOptions(options)}
			</select>
		</div>
	);
};

export default Dropdown;
