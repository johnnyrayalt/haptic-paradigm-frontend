import React from 'react';
import './featuredArtistStyles.scss';
import TimeStamp from 'components/TimeStamp';
import { FEATURED_ARTIST_BIO, FEATURED_ARTIST_NAME } from 'resources/currentProjectConstants';

const FeaturedArtist = () => {
	return (
		<div>
			<p className='text-text'>
				<TimeStamp />
				Featured Artist: {FEATURED_ARTIST_NAME}
			</p>
			<p className='text-text off'>
				<TimeStamp />
				{FEATURED_ARTIST_BIO}
			</p>
		</div>
	);
};

export default FeaturedArtist;
