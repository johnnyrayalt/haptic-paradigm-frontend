import React from 'react';
import { EXHIBITION_INFO } from 'resources/constants';
import { IHeadLineProps } from 'interfaces/Props/IHeadLineProps';
import { Link } from 'react-router-dom';
import TimeStamp from 'components/TimeStamp';

const Headline = (props: IHeadLineProps) => {
	const { isLive, hasAdditionalInfo } = props;

	return (
		<>
			{isLive ? (
				<Link className='text-link' to='/control-room'>
					<TimeStamp />
					The gallery is currently open. Come on in, the water's fine.
				</Link>
			) : (
				<div>
					<TimeStamp />
					{EXHIBITION_INFO(hasAdditionalInfo)}
					<p className='text-text'>
						<TimeStamp />
						Stay tuned for the next exhibiton
					</p>
				</div>
			)}
		</>
	);
};

export default Headline;
