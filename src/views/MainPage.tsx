import React, { useEffect } from 'react';
import SliderContainer from 'components/SliderContainer';
import { action } from 'store';
import { actions } from 'store/actions';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import './mainPageStyles.scss';
import { Link } from 'react-router-dom';

const MainPage = () => {
	const isControlling: any = useSelector((state: any) => state.isControlling);

	useEffect(() => {
		action(actions.CONNECT_TO_SERVER);
	});

	return (
		<div className='main-page-container'>
			<div className='border-t'></div>
			<div className='border-r'></div>
			<div className='border-b'></div>
			<div className='border-l'></div>

			<div className='text-container'>
				<div className='slider-container-header'>
					<h4>HAPTIC PARADIGM</h4>
				</div>
				<div>
					<Link className='text-link' to='/about'>
						Learn more about this project
					</Link>
				</div>
				<div className='slider-container-is-in-control'>
					<p className='text'>
						CURRENTLY:{' '}
						{isControlling ? (
							<span className='important-text'>controlling</span>
						) : (
							'watching'
						)}
					</p>
					{isControlling && (
						<Helmet>
							<title>YOU ARE IN CONTROL</title>
						</Helmet>
					)}
				</div>
				<div>
					<iframe
						title='player'
						src='https://vimeo.com/event/165633/embed'
						frameBorder='0'
						allow='autoplay; fullscreen'
						allowFullScreen={false}
						className='embedded-player'
					></iframe>
				</div>
				<div>
					<p className='text'>How to use this site:</p>
					<p className='text'>Move a slider, wait for a response</p>
				</div>
			</div>
			<SliderContainer />
		</div>
	);
};

export default MainPage;
