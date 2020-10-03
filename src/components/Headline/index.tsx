import React from 'react';
import { EXHIBITION_INFO } from 'resources/constants/constants';
import { Link } from 'react-router-dom';
import TimeStamp from 'components/TimeStamp';
import { FEATURED_ARTIST_NAME } from 'resources/constants/currentProjectConstants';
import { IHeadLineProps } from 'interfaces/Props/IHeadLineProps';

const Headline = (props: IHeadLineProps) => {
	const { isLive } = props;

	return (
		<>
			{isLive ? (
				<span>
					<p className='text-text important-text'>
						<TimeStamp />
						Featuring visuals by {FEATURED_ARTIST_NAME}, sound by Chloe Alexandra
						Thompson
					</p>
					<Link className='text-link' to='/control-room'>
						<TimeStamp />
						The gallery is currently open. Come on in, the water's fine.
					</Link>
				</span>
			) : (
				<p className='text-text important-text'>
					<TimeStamp />
					{EXHIBITION_INFO()}
				</p>
			)}
		</>
	);
};

export default Headline;
