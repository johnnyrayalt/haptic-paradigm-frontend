import React, { useState } from 'react';
import MainPage from 'views/MainPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from 'views/WelcomePage';
import AboutPage from 'views/AboutPage';
import { IS_LIVE, LINKS_ON } from 'resources/constants/currentProjectConstants';
import { CURRENT_UI_SCHEME } from 'resources/constants/uiConstants';
import { useSelector } from 'react-redux';
import { action } from 'store';
import { actions } from 'store/actions';
import Dropdown from 'components/Dropdown';
import './appStyles.scss';

const App = () => {
	const initialDropdownState = useSelector((state: any) => state.keyboardMode.value);
	const [dropdownState, updateDropdownState] = useState(initialDropdownState);

	const updateDropdownValueCB = (value: string) => {
		const valAsBool: boolean = value === 'true';
		action(actions.UPDATE_FROM_UI, {
			actionType: actions.TOGGLE_KEYBOARD_MODE,
			payload: valAsBool,
		});
		updateDropdownState(value);
		window.localStorage.setItem('keyboardMode', value);
	};
	const keyboardModeHTML = [
		<div key={'key'} className='keyboard-mode-dropdown-container'>
			<Dropdown
				title={'<Keyboard Only Mode>'}
				description={
					'Enable or disable keyboard only mode for site accessibility without a mouse'
				}
				options={[
					{ text: 'Enabled', value: true },
					{ text: 'Disabled', value: false },
				]}
				callback={updateDropdownValueCB}
			/>
		</div>,
	];

	return (
		<div className='app-wrapper' style={{ overflow: 'hidden' }}>
			<div className='slider-container-wrapper'>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/welcome' />
					</Route>
					<Route
						path='/welcome'
						component={() => (
							<WelcomePage
								isLive={IS_LIVE}
								linksOn={LINKS_ON}
								hasAdditionalInfo={false}
								keyboardMode={keyboardModeHTML}
							/>
						)}
					/>
					<Route
						path='/control-room'
						component={() => (
							<MainPage
								uiScheme={CURRENT_UI_SCHEME}
								keyboardMode={keyboardModeHTML}
								keyboardModeEnabled={dropdownState}
							/>
						)}
					/>
					<Route
						path='/about'
						component={() => (
							<AboutPage linksOn={LINKS_ON} keyboardMode={keyboardModeHTML} />
						)}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default App;
