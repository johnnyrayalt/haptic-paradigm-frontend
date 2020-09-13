import React from 'react';
import { EXHIBITION_INFO } from 'resources/constants';
import { IHeadLineProps } from 'interfaces/Props/IHeadLineProps';

const Headline = (props: IHeadLineProps) => {
	const { isLive, hasAdditionalInfo } = props;

	return (
		<>
			{isLive
				? 'The gallery is currently closed but here is audio documentation of our last interaction.'
				: EXHIBITION_INFO(hasAdditionalInfo)}
		</>
	);
};

export default Headline;
