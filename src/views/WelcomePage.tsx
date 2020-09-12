import React from 'react';
import { Link } from 'react-router-dom';
import './welcomePageStyles.scss';
import VideoPlayer from 'components/VideoPlayer';
import TimeStamp from 'components/TimeStamp';
import Headline from 'components/Headline/Headline';
import { IWelcomePageProps } from 'interfaces/Props/IWelcomePageProps';

const WelcomePage = (props: IWelcomePageProps) => {
	const { isDocumentation, linksOn, hasAdditionalInfo } = props;
	const VIDEO_TYPE = 'past';

	return (
		<div className='text-page'>
			<h1 className='text-header'>welcome</h1>
			<div className='text-text-container'>
				<p className='text-text'>
					<Link className='text-link' to='/about'>
						<TimeStamp />
						Learn more about this project
					</Link>
				</p>
				<p className='text-text important-text'>
					<TimeStamp />
					<Headline
						isDocumentation={isDocumentation}
						hasAdditionalInfo={hasAdditionalInfo}
					/>
				</p>

				<VideoPlayer videoType={VIDEO_TYPE} />

				<p className='text-text'>
					<TimeStamp />
					Haptic Paradigm is an interactive installation conceptualized by Chloe Alexandra
					Thompson with web tools by Johnny Ray Alt. The project explores the ways we
					remain in relationship to one another, despite being in isolation and outside of
					immediate view.
				</p>
				<p className='text-text'>
					<TimeStamp />
					Guests may take short turns interacting with the piece for a 5 hour window. When
					you arrive in the space, you’ll find some sliders that you can use to manipulate
					the composition. You will see them moving but will not be able to interact until
					it’s your turn. Sliders are marked but what you are controlling will shift over
					time.
				</p>
				<p className='text-text'>
					<TimeStamp />
					To hear the results of the interactions, hit play on the embedded livestream on
					the webpage. If someone is ahead of you in the queue, you’re encouraged to wait
					and listen. Once the controls are yours, you’ll be able to manipulate the sonic
					and visual fields.
				</p>
				<Link className={`text-link ${linksOn ? 'on' : 'off'}`} to='/control-room'>
					<TimeStamp />
					Take me to the control room_
				</Link>
			</div>
		</div>
	);
};

export default WelcomePage;
