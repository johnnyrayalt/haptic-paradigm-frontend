import React from 'react';
import './featuredArtistStyles.scss';
import TimeStamp from 'components/TimeStamp';
import {
	FEATURED_ARTIST_BIO,
	FEATURED_ARTIST_NAME,
	FEATURED_ARTIST_LINK,
} from 'resources/constants/currentProjectConstants';

const FeaturedArtist = () => {
	const featuredArtistLink = (): string => {
		return FEATURED_ARTIST_LINK.slice(8).slice(0, -1);
	};

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
						{featuredArtistLink()}
					</a>
				</span>
			</p>
		</div>
	);
};

export default FeaturedArtist;
