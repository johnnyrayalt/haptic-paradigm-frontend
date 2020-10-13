import React from 'react';
import { Link } from 'react-router-dom';
import './welcomePageStyles.scss';
import FeaturedArtist from 'components/FeaturedArtist';
import TimeStamp from 'components/TimeStamp';
import { IAboutPageProps } from 'interfaces/Props/IAboutPageProps';
import TextBlock from 'components/TextBlock';
import aboutData from '../resources/text/aboutPage.json';

const AboutPage = (props: IAboutPageProps) => {
	const { linksOn, keyboardMode } = props;

	return (
		<div className='text-page'>
			{keyboardMode}
			<h1 aria-label='about page' className='text-header'>
				about
			</h1>
			<div className='text-text-container'>
				<p>
					<Link className={`text-link ${linksOn ? 'on' : 'off'}`} to='/control-room'>
						<TimeStamp />
						<span aria-label='Back to the main page to interact with the project'>
							Back to the control room
						</span>
					</Link>
				</p>
				<p>
					<Link className='text-link' to='/welcome'>
						<TimeStamp />
						<span aria-label='Link back to the welcome page.'>Back Home</span>
					</Link>
				</p>
				<p>
					<a
						className='text-link'
						href='https://linktr.ee/hereitis'
						target='_blank'
						rel='noopener noreferrer'
					>
						<TimeStamp />
						<span aria-label='External link to various organization in which you can donate to.'>
							If you enjoy this work consider donating to any of these organizations
						</span>
					</a>
				</p>
				<FeaturedArtist />
				<TextBlock json={aboutData} />
			</div>
		</div>
	);
};

export default AboutPage;
