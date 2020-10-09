import { actions, updateFromSocketHandler, updateIsControlling } from 'store/actions';
import { put, all, take, call, fork } from 'redux-saga/effects';
import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';

const URL = process.env.REACT_APP_URL || 'localhost';
const PORT = process.env.PORT || '8000';

const xypad = 'xypad';
const slider = 'slider';

function connect() {
	const socket = io(`${URL}:${PORT}`, { transports: ['websocket'] });
	return new Promise((resolve) => {
		socket.on('connect', () => {
			if (process.env.NODE_ENV === 'development')
				console.log(`[CLIENT]: Attempting to connect to server over port ${PORT}`);
			resolve(socket);
			socket.on('connectedToServer', (message) => {
				console.log(message);
				if (process.env.NODE_ENV === 'development')
					console.log(`[CLIENT]: Socket connected with id: ${socket.id}`);
			});
		});
	});
}

function determineActionType(address, type) {
	const action = (selector) => `UPDATE_VALUE_${selector}_${type.toUpperCase()}`;
	let uiSelector;

	switch (true) {
		case address.includes(xypad):
			uiSelector = action(xypad.toUpperCase());
			break;
		case address.includes(slider):
			uiSelector = action(slider.toUpperCase());
			break;
		default:
			return;
	}

	if (actions[uiSelector]) return uiSelector;
}

function subscribeToSocket(socket) {
	return eventChannel((emitter) => {
		socket.on('controlling', (payload) => {
			if (process.env.NODE_ENV === 'development') console.log('im in control');
			socket.emit('controllerTimerStart');

			emitter(updateIsControlling(true));

			payload.forEach((message) => {
				const actionType = determineActionType(message.address, message.args[0].type);

				const messageToUpdate = {
					address: message.address,
					args: message.args,
				};

				emitter(updateFromSocketHandler(actionType, messageToUpdate));
			});
		});

		socket.on('initialState', async (messages) => {
			await messages.forEach((message) => {
				const actionType = determineActionType(message.address, message.args[0].type);

				const messageToUpdate = {
					address: message.address,
					args: message.args,
				};

				emitter(updateFromSocketHandler(actionType, messageToUpdate));
			});
		});

		socket.on('broadcastMessage', (payload) => {
			const actionType = determineActionType(payload.address, payload.args[0].type);

			emitter(updateFromSocketHandler(actionType, payload));
		});

		socket.on('ping', () => {
			if (process.env.NODE_ENV === 'development') console.log('pinged');
		});

		socket.on('disconnectingClient', () => {
			console.log(`[CLIENT]: Disconnecting from server port ${PORT}`);
			socket.emit('disconnect');
			socket.disconnect();
			console.log('[CLIENT]: Disconnected');
			window.location.reload(true);
		});

		return () => {};
	});
}

function* readFromSocket(socket) {
	const channel = yield call(subscribeToSocket, socket);
	while (true) {
		let action = yield take(channel);
		yield put(action);
	}
}

function* writeToSocket(socket) {
	while (true) {
		const payload = yield take(actions.SEND_MESSAGE);
		yield socket.emit('message', payload);
	}
}

function* disconnectClient(socket) {
	while (true) {
		const disconnect = yield take(actions.DISCONNECT_FROM_SERVER);
		yield socket.emit(disconnect.payload.message, 'disconnect');
	}
}

function* flow() {
	yield take(actions.CONNECT_TO_SERVER);
	while (true) {
		const socket = yield call(connect);
		yield fork(readFromSocket, socket);
		yield fork(writeToSocket, socket);

		yield call(disconnectClient, socket);
	}
}

function* updateOscValue(payload) {
	yield put({ type: actions.UPDATE_OSC_VALUE, payload: payload });
}

function* updateFromUiListener() {
	while (true) {
		const response = yield take(actions.UPDATE_FROM_UI);
		yield call(updateOscValue, response.payload);
		yield put({ type: response.actionType, payload: response.payload });
	}
}

function* updateFromSocketListener() {
	while (true) {
		const payload = yield take(actions.UPDATE_FROM_SOCKET);
		const { action, message } = payload.payload;
		yield call(updateOscValue, message);
		yield put({ type: action, payload: message });
	}
}

export default function* rootSaga() {
	while (true) {
		yield all([updateFromUiListener(), updateFromSocketListener(), fork(flow)]);
	}
}
