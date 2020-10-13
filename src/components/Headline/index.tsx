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
					<p
						className='text-text important-text'
						aria-label={`Featuring visuals by ${FEATURED_ARTIST_NAME}, sound by Chloe Alexandra Thompson, and web tools by Johnny Ray Alt.`}
					>
						<TimeStamp />
						Featuring visuals by {FEATURED_ARTIST_NAME}, sound by Chloe Alexandra
						Thompson, and web tools by Johnny Ray Alt.
					</p>

					<Link className='text-link' to='/control-room'>
						<p aria-label='Link to the main page to interact with the project'>
						    <TimeStamp />
							The gallery is currently open. Come on in, the water's fine.
						</p>
					</Link>
				</span>
			) : (
				<p className='text-text important-text'>
					<TimeStamp />
					<span aria-label={EXHIBITION_INFO()}>{EXHIBITION_INFO()}</span>
				</p>
			)}
		</>
	);
};

export default Headline;
