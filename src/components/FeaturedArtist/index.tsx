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
				<span aria-label={`Featured Artist: ${FEATURED_ARTIST_NAME}`}>
					Featured Artist: {FEATURED_ARTIST_NAME}
				</span>
			</p>
			<p className='text-text'>
				<TimeStamp />
				<span aria-label={`${FEATURED_ARTIST_BIO}`}>{FEATURED_ARTIST_BIO} </span>
				<span aria-label='External link to the featured artists website'>
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
