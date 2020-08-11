import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'store/reducers';
import saga from 'store/sagas';
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
	const { createLogger } = require(`redux-logger`);
	const logger = createLogger({
		collapsed: (getState: any, action: any, logEntry: any) => !logEntry.error,
	});

	middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(saga);

export default store;
export const action = (type: string, args?: any) => store.dispatch({ type, ...args });
