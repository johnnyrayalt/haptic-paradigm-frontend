import React from 'react';
import { Link } from 'react-router-dom';
import './welcomePageStyles.scss';
import VideoPlayer from 'components/VideoPlayer';
import TimeStamp from 'components/TimeStamp';
import Headline from 'components/Headline';
import { IWelcomePageProps } from 'interfaces/Props/IWelcomePageProps';
import { VIDEO } from 'resources/constants/currentProjectConstants';

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
						Learn more about this project
					</Link>
				</p>
				<Headline isLive={isLive} hasAdditionalInfo={hasAdditionalInfo} />

				<div>
					<TimeStamp />
					<VideoPlayer videoType={VIDEO_TYPE} />
				</div>

				<p className='text-text'>
					<TimeStamp />
					<span>
						Haptic Paradigm is an interactive installation conceptualized by Chloe
						Alexandra Thompson with web tools by Johnny Ray Alt. The project explores
						the ways we remain in relationship to one another, despite being in
						isolation and outside of immediate view.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						Guests may take short turns interacting with the piece for a 3 hour window.
						When you arrive in the space, you’ll find controls to manipulate the
						composition. You will see them moving but will not be able to interact until
						it’s your turn. Sliders are marked but what you are controlling will shift
						over time.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						When you hit unmute or play on the embedded livestream you are experiencing
						the echoed results of user interactions, the sonic experience is best if you
						are able to open it in another window. If someone is ahead of you in the
						queue, you’re encouraged to wait and observe. Once the controls are yours,
						the tab will read: YOU ARE IN CONTROL and you’ll be able to manipulate the
						sonic and visual fields.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						The sonic and visual experiences are related to each other, if you are not
						able to access one element you are not missing a vital component or any
						written or spoken directions. Both are interpretations of a similar source -
						this was designed mindfully so that people with various abilities can
						participate with this in some way.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						The visual experience is comprised of abstract, interactive loops with fluid
						imagery based around reflection, feedback and the movement of data in and
						around screens. The visuals range from bright, low contrast abstractions of
						high-speed newsfeeds and analog static, to dark, slow, undulating internal
						dreamscapes of the same data re-imagined through machine-learning
						algorithms.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						The sonic experience is a shifting composition which includes sound made
						with field recordings of breath, ocean waves, rain and voice without the use
						of legible words, portions also include AM, FM, granular and other forms of
						synthesis.
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					<span>
						If you are using a screen reader or a keyboard controlled device, toggle to
						keyboard mode on any page to optimize keyboard accessibility for your
						device.
					</span>
				</p>
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
