import React, { useCallback, useEffect, useState } from 'react';
import { action } from 'store';
import { actions } from 'store/actions';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import './mainPageStyles.scss';
import { Link } from 'react-router-dom';
import VideoPlayer from 'components/VideoPlayer';
import XYPad from 'components/UIControls/XYPad';
import SliderContainer from 'components/SliderContainer';
import { v4 as uuidv4 } from 'uuid';
import { SLIDER_FILTERS, UI_SCHEMES } from '../resources/constants/uiConstants';

const MainPage = (props: {
	uiScheme: string[];
	keyboardMode: any;
	keyboardModeEnabled: boolean;
}) => {
	const { uiScheme, keyboardMode } = props;

	const isControlling: any = useSelector((state: any) => state.isControlling);

	const [assembledUIScheme, assembleUIScheme] = useState([] as JSX.Element[]);

	const setUIScheme = useCallback(() => {
		let buildComponents: JSX.Element[] = [];
		const keyboardModeEnabled = window.localStorage.getItem('keyboardMode');

		if (keyboardModeEnabled === 'true') {
			buildComponents.push(
				<div key={uuidv4()} className='slider-container'>
					<SliderContainer info={true} sine={false} />
				</div>,
			);
		} else {
			if (keyboardModeEnabled === 'false') {
				action(actions.UPDATE_FROM_UI, {
					actionType: actions.TOGGLE_KEYBOARD_MODE,
					payload: '',
				});
				window.localStorage.setItem('keyboardMode', '');
				window.location.reload();
			}

			uiScheme.forEach((scheme) => {
				switch (true) {
					case scheme === UI_SCHEMES.SLIDERS:
						buildComponents.push(
							<div key={uuidv4()} className='slider-container'>
								<SliderContainer
									info={false}
									sine={false}
									opts={{ filters: SLIDER_FILTERS }}
								/>
							</div>,
						);
						break;
					case scheme === UI_SCHEMES.XY_PAD:
						buildComponents.push(
							<div key={uuidv4()} className='xy-chart'>
								<XYPad setCanvasSize={window.screen.width} />
							</div>,
						);
						break;
					default:
						return (
							<div key={uuidv4()}>
								<p className='text'>Please enter a UI Scheme!</p>
							</div>
						);
				}
			});
		}

		assembleUIScheme(buildComponents);
	}, [uiScheme]);

	useEffect(() => {
		setUIScheme();
	}, [setUIScheme]);

	useEffect(() => {
		action(actions.CONNECT_TO_SERVER);
	});

	return (
		<div className='main-page-container'>
			<div className='border-t'></div>
			<div className='border-r'></div>
			<div className='border-b'></div>
			<div className='border-l'></div>
			{keyboardMode}
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
			{assembledUIScheme}
		</div>
	);
};

export default MainPage;
