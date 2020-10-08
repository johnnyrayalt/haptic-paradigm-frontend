import React, { useEffect } from 'react';
import { action } from 'store';
import { actions } from 'store/actions';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import './mainPageStyles.scss';
import { Link } from 'react-router-dom';
import VideoPlayer from 'components/VideoPlayer';
import XYPad from 'components/UIControls/XYPad';
import SliderContainer from 'components/SliderContainer';

const MainPage = (props: { uiScheme: string }) => {
	const { uiScheme } = props;

	const isControlling: any = useSelector((state: any) => state.isControlling);

	const setUIScheme = (scheme: string) => {
		switch (true) {
			case scheme === 'sliders':
				return (
					<div className='slider-container'>
						<SliderContainer />
					</div>
				);
			case scheme === 'xypad':
				return (
					<div className='xy-chart'>
						<XYPad setCanvasSize={window.screen.width} />
					</div>
				);
			default:
				return (
					<div>
						<p className='text'>Please enter a UI Scheme!</p>
					</div>
				);
		}
	};

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
				<div>
					<p className='text'>How to use this site:</p>
					<p className='text'>Move a slider, wait for a response</p>
					<p className='text'>Response times may vary</p>
				</div>
				<div>
					<VideoPlayer videoType={'live'} />
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
			</div>
			{setUIScheme(uiScheme)}
		</div>
	);
};

export default MainPage;
