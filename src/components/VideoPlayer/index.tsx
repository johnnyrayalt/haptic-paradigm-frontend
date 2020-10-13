import React from 'react';
import './videoPlayerStyles.scss';
import {
	HOSTED_VIDEO_PARENT,
	LOCAL_VIDEO_PARENT,
	TWITCH_CHANNEL_ID,
	TWITCH_VIDEO_ID,
} from 'resources/constants/constants';
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
		`https://player.twitch.tv/${source}${parent}`;

	return (
		<div className='video-player-container'>
			<iframe
				title='player'
				src={selectUrl(videoType)}
				frameBorder='0'
				allow='autoplay'
				allowFullScreen={false}
				className='embedded-player'
				style={{ width: window.screen.width - 80 }}
			></iframe>
			<div
				className='sr-only'
				aria-label={`The visual experience is comprised of abstract, interactive loops with fluid imagery based around reflection, feedback and the movement of data in and around screens. The visuals range from bright, low contrast abstractions of high-speed newsfeeds and analog static, to dark, slow, undulating internal dreamscapes of the same data re-imagined through machine-learning algorithms. `}
			></div>
		</div>
	);
};

export default VideoPlayer;
