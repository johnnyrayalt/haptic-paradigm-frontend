import React from 'react';
import './videoPlayerStyles.scss';
import {
	HOSTED_VIDEO_PARENT,
	LOCAL_VIDEO_PARENT,
	TWITCH_CHANNEL_ID,
	TWITCH_VIDEO_ID,
} from 'resources/constants';
import { IVideoPlayerProps } from 'interfaces/Props/IVideoPlayerProps';

const VideoPlayer = (props: IVideoPlayerProps) => {
	const { videoType } = props;

	const selectUrl = (videoType: string): string => {
		const source: string = getVideoPlayerSourceString(videoType);
		const parent: string = getVideoPlayerParentString();

		return assembleUrl(source, parent);
	};

	const getVideoPlayerParentString = (): string => {
		if (process.env.NODE_ENV === 'development') {
			return LOCAL_VIDEO_PARENT;
		} else {
			return HOSTED_VIDEO_PARENT;
		}
	};

	const getVideoPlayerSourceString = (videoType: string): string => {
		if (videoType === 'live') {
			return TWITCH_CHANNEL_ID;
		} else if (videoType === 'past') {
			return TWITCH_VIDEO_ID;
		} else {
			throw new Error('Video Type not supported');
		}
	};

	const assembleUrl = (source: string, parent: string): string =>
		`https://player.twitch.tv/${source}${parent}&muted=false`;

	return (
		<>
			<iframe
				title='player'
				src={selectUrl(videoType)}
				frameBorder='0'
				allow='autoplay; fullscreen'
				allowFullScreen={false}
				className='embedded-player'
			></iframe>
		</>
	);
};

export default VideoPlayer;
