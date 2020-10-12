import React from 'react';
import { Link } from 'react-router-dom';
import './welcomePageStyles.scss';
import FeaturedArtist from 'components/FeaturedArtist';
import TimeStamp from 'components/TimeStamp';
import { IAboutPageProps } from 'interfaces/Props/IAboutPageProps';

const AboutPage = (props: IAboutPageProps) => {
	const { linksOn, keyboardMode } = props;

	return (
		<div className='text-page'>
			{keyboardMode}
			<h1 className='text-header'>about</h1>
			<div className='text-text-container'>
				<p>
					<Link className={`text-link ${linksOn ? 'on' : 'off'}`} to='/control-room'>
						<TimeStamp />
						Back to the control room
					</Link>
				</p>
				<p>
					<Link className='text-link' to='/welcome'>
						<TimeStamp />
						Back Home
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
						If you enjoy this work consider donating to any of these organizations
					</a>
				</p>
				<FeaturedArtist />

				<p className='text-text'>
					<TimeStamp />
					About Haptic Paradigm
				</p>
				<p className='text-text'>
					<TimeStamp />
					Haptic Paradigm is a web based interactive installation conceptualized by Chloe
					Alexandra Thompson with webtools created in collaboration with Johnny Ray Alt.
				</p>
				<p className='text-text'>
					<TimeStamp />
					The motivation behind the project is to explore the ways we remain in
					relationship to one another, despite being in isolation and outside one
					another’s view.
				</p>
				<p className='text-text'>
					<TimeStamp />
					The composition's structure or medium may shift between gallery hours, as a
					response to inspiration the users have contributed during the previous
					performance. The composition is active and shifting without outside interaction,
					Haptic Paradigm is a tool encouraging participants to play by ear.
				</p>
				<p className='text-text'>
					<TimeStamp />
					Participants will bring outside variables into the piece and influence the work
					over time.
				</p>
				<p className='text-text'>
					<TimeStamp />
					Chloe Alexandra Thompson is a Cree (Beaver Lake Cree Nation), Canadian,
					interdisciplinary artist and sound designer composing works of sonic minimalism
					that envelope listeners into a state of equilibrium and fill rooms with discrete
					frequencies. Her work is composed through audio programming, live processed
					instruments and field recordings. Focused on live performance and spatial
					intervention, she engineers a multi-channel interplay of psychoacoustics to
					produce felt effects on the body. Fascinated by digital technology’s seemingly
					endless possibilities for experimentation, she routinely collaborates with other
					artists to explore new avenues for sonic environments and experiences. Thompson
					is presently based in Brooklyn, NY, USA. You can find an archive of works at:{' '}
					<span>
						<a
							className='text-link'
							href='https://www.chloealexandra.info/'
							rel='noopener noreferrer'
							target='_blank'
						>
							chloealexandra.info
						</a>
					</span>
				</p>
				<p className='text-text'>
					<TimeStamp />
					Johnny Ray Alt (b. 1991, Los Angeles, CA) is an interdisciplinary artist,
					curator, and software engineer whose work explores the creation of spaces that
					aim to shorten the distance between original and documentation. Focused on
					digital experiences, their work currently utilizes web and computer graphics
					programming, collaboration, and interactivity to produce generative, web-based
					art. Alt is presently based in Portland, OR, USA. To see more of their work,
					visit their website:{' '}
					<span>
						<a
							className='text-link'
							href='http://johnnyrayalt.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							johnnyrayalt.com
						</a>
					</span>
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
