import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './welcomePageStyles.scss';
import VideoPlayer from 'components/VideoPlayer';
import TimeStamp from 'components/TimeStamp';
import Headline from 'components/Headline';
import TextBlock from 'components/TextBlock';
import { IWelcomePageProps } from 'interfaces/Props/IWelcomePageProps';
import { VIDEO } from 'resources/constants/currentProjectConstants';
import textData from '../resources/text/welcomeText.json';

const WelcomePage = (props: IWelcomePageProps) => {
	const { isLive, linksOn, hasAdditionalInfo, keyboardMode } = props;
	const VIDEO_TYPE = VIDEO;

	return (
		<div className='text-page'>
			{keyboardMode}
			<h1 className='text-header'>welcome</h1>
			<div className='text-text-container'>
				<p className='text-text'>
					<Link className='text-link' to='/about'>
						<TimeStamp />
						<span aria-label='Learn more about this project<'>
							Learn more about this project
						</span>
					</Link>
				</p>
				<Headline isLive={isLive} hasAdditionalInfo={hasAdditionalInfo} />

				<div>
					<TimeStamp />
					<VideoPlayer videoType={VIDEO_TYPE} />
				</div>
				<TextBlock json={textData} />
				<Link className={`text-link ${linksOn ? 'on' : 'off'}`} to='/control-room'>
					<TimeStamp />
					<span aria-label='Link to the main page to interact with the project'>
						Take me to the control room_
					</span>
				</Link>
			</div>
		</div>
	);
};

export default WelcomePage;
