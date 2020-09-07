import React from 'react';
import './featuredArtistStyles.scss';
import TimeStamp from 'components/TimeStamp';
import {
	FEATURED_ARTIST_BIO,
	FEATURED_ARTIST_NAME,
	FEATURED_ARTIST_LINK,
} from 'resources/currentProjectConstants';

const FeaturedArtist = () => {
	return (
		<div>
			<p className='text-text'>
				<TimeStamp />
				Featured Artist: {FEATURED_ARTIST_NAME}
			</p>
			<p className='text-text'>
				<TimeStamp />
				{FEATURED_ARTIST_BIO}{' '}
				<span>
					<a
						className='text-link'
						href={FEATURED_ARTIST_LINK}
						rel='noopener noreferrer'
						target='_blank'
					>
						lattice.tools
					</a>
				</span>
			</p>
		</div>
	);
};

export default FeaturedArtist;
