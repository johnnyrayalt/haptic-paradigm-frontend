import React, { useCallback, useEffect, useState } from 'react';

const Dropdown = (props: {
	title: string;
	description: string;
	options: string[];
	callback: (e: any) => void;
}) => {
	const { title, description, options, callback } = props;

	const [assembledOptions, setAssembledOptions] = useState([] as JSX.Element[]);

	const assembleOptions = useCallback((): void => {
		const optionsArray: JSX.Element[] = [];
		options.map((opt: string) =>
			optionsArray.push(
				<option key={opt} className='dropdown-option selectable' value={opt}>
					{opt}
				</option>,
			),
		);
		setAssembledOptions(optionsArray);
	}, [options]);

	useEffect(() => {
		assembleOptions();
	}, [assembleOptions]);

	return (
		<div className='dropdown-container'>
			<select className='dropdown-select' onChange={(e) => callback(e)}>
				<option
					className='dropdown-option title'
					value={description}
					selected={true}
					disabled={true}
				>
					{title}
				</option>
				{assembledOptions}
			</select>
		</div>
	);
};

export default Dropdown;
