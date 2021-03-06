import TimeStamp from '../TimeStamp';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TextBlock = (props: { json: { text: string; linkHref?: string; linkText?: string }[] }) => {
	const { json } = props;

	const [textBlock, setTextBlock] = useState([] as JSX.Element[]);

	useEffect(() => {
		const assembledTextArray: JSX.Element[] = json.map((text) => {
			return (
				<p key={uuidv4()} className='text-text'>
					<TimeStamp />
					<span aria-label={`${text.text}`}>{text.text}</span>
					{text.linkHref && text.linkText && (
						<span aria-label={`External link to ${text.linkText}`}>
							<a
								className='text-link'
								href={text.linkHref}
								rel='noopener noreferrer'
								target='_blank'
							>
								{text.linkText}
							</a>
						</span>
					)}
				</p>
			);
		});

		setTextBlock(assembledTextArray);
	}, [json]);

	return <>{textBlock}</>;
};

export default TextBlock;
