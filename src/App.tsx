import React from 'react';
import MainPage from 'views/MainPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from 'views/WelcomePage';
import AboutPage from 'views/AboutPage';
import { IS_LIVE, LINKS_ON } from 'resources/currentProjectConstants';

const App = () => {
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
								hasAdditionalInfo={true}
							/>
						)}
					/>
					<Route path='/control-room' component={MainPage} />
					<Route path='/about' component={() => <AboutPage linksOn={LINKS_ON} />} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
