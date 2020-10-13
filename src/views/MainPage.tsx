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
import { TURN_OFF_PAGE } from 'resources/constants/currentProjectConstants';

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
					<SliderContainer info={true} sine={false} opts={{ screenReaderMode: true }} />
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
									opts={{ screenReaderMode: false, filters: SLIDER_FILTERS }}
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
			<div
				className='sr-only'
				aria-label={`The sonic and visual experiences are related to each other, if you are not able to access one element you are not missing a vital component or any written or spoken directions. The visual experience is comprised of abstract, interactive loops with fluid imagery based around reflection, feedback and the movement of data in and around screens. The visuals range from bright, low contrast imagery of abstracted high-speed newsfeeds and analog static, to dark, slow, undulating internal dreamscapes of the same data re-imagined through machine-learning algorithms. The sonic experience is a shifting 4 part composition inspired by water’s movement includes musique concrete made with field recordings of breath, ocean waves, rain and voice without the use of legible words, portions also include AM, FM and other forms of synthesis.`}
			></div>
			{keyboardMode}
            {TURN_OFF_PAGE ? (<p aria-label='The project is not live, please check back for the next showing'>The project is not live, please check back for the next showing</p>) : (
            <div><div className='text-container'>
				<div className='slider-container-header'>
					<h4 aria-label='HAPTIC PARADIGM'>HAPTIC PARADIGM</h4>
				</div>
				<div>
					<Link className='text-link' to='/about'>
					<span aria-label='Internal Link to the about page'>Learn more about this project</span>
					</Link>
				</div>
				<div>
					<p aria-label='How to use this site:' className='text'>How to use this site:</p>
					<p aria-label='Interact with the controls,' className='text'>Interact with the controls,</p>
					<p aria-label='wait for a response.' className='text'>wait for a response.</p>
					<p aria-label='Response times may vary.' className='text'>Response times may vary.</p>
				</div>
				<VideoPlayer videoType={'live'} />
				<div className='slider-container-is-in-control'>
					<p className='text'>
						CURRENTLY:{' '}
						{isControlling ? (
							<span aria-label='You are currently in control of the site. You may now interact with the controls.' className='important-text'>controlling</span>
						) : (
							<span aria-label='You are currently in watching mode, please wait until control shifts to you to interact with the interface.'>watching</span>
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
            )
        }
			
		</div>
	);
};

export default MainPage;
