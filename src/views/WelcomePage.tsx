import React from 'react';
import { Link } from 'react-router-dom';
import './textPageStyles.scss';
import moment from 'moment';

const textPage = () => {
	return (
		<div className='text-page'>
			<h1 className='text-header'>welcome</h1>
			<div className='text-text-container'>
				<p className='text-text important-text'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					The gallery is currently closed but here is audio documentation of our last
					interaction.
				</p>
				<iframe
					title='player'
					src='https://vimeo.com/event/140098/embed'
					frameBorder='0'
					allow='fullscreen'
					allowFullScreen={false}
					className='embedded-player'
				></iframe>
				<div>
					<Link className='text-link' to='/about'>
						Learn more about this project
					</Link>
				</div>
				<p className='text-text'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					Haptic Paradigm is an interactive installation conceptualized by Chloe Alexandra
					Thompson with web tools by Johnny Ray Alt. The project explores the ways we
					remain in relationship to one another, despite being in isolation and outside of
					immediate view.
				</p>
				<p className='text-text'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					When you arrive in the space, you’ll find two sliders that you can use to
					manipulate the composition. You will see them moving but will not be able to
					interact until it’s your turn. Sliders are marked but what you are controlling
					will shift over time.
				</p>
				<p className='text-text'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					Guests may take short turns interacting with the piece for a 5 hour window. When
					you arrive in the space, you’ll find two sliders that you can use to manipulate
					the composition. You will see them moving but will not be able to interact until
					it’s your turn.
				</p>
				<p className='text-text'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					To hear the results of the interactions, hit play on the embedded livestream on
					the webpage. If someone is ahead of you in the queue, you’re encouraged to wait
					and listen. Once the controls are yours, you’ll be able to manipulate the sonic
					and visual fields.
				</p>
				<Link className='text-link off' to='/control-room'>
					<span>
						{moment().format('L HH:mm')} :\{'>'}
					</span>{' '}
					Take me to the control room_
				</Link>
			</div>
		</div>
	);
};

export default textPage;
