import { createAction } from 'redux-act';

export const actions = {
	UPDATE_VALUE_FREQUENCY: 'UPDATE_VALUE_FREQUENCY',
	UPDATE_VALUE_AMPLITUDE: 'UPDATE_VALUE_AMPLITUDE',
	UPDATE_OSC_VALUE: 'UPDATE_OSC_VALUE',
	UPDATE_FROM_UI: 'UPDATE_FROM_UI',
	UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
	CONNECT_TO_SERVER: 'CONNECT_TO_SERVER',
	DISCONNECT_FROM_SERVER: 'DISCONNECT_FROM_SERVER',
	SEND_MESSAGE: 'SEND_MESSAGE',
	RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
	IS_CONTROLLING: 'IS_CONTROLLING',
};

export const updateFromUiHandler = createAction(
	actions.UPDATE_FROM_UI,
	(action: any, message?: any) => ({
		action,
		message,
	}),
);

export const updateFromSocketHandler = createAction(
	actions.UPDATE_FROM_SOCKET,
	(action: any, message: any) => ({
		action,
		message,
	}),
);

export const sendMessage = createAction(actions.SEND_MESSAGE, (message: any) => ({
	message,
}));

export const receiveMessage = createAction(actions.RECEIVE_MESSAGE, (message: any) => ({
	message,
}));

export const updateIsControlling = createAction(
	actions.IS_CONTROLLING,
	(isControlling: boolean) => ({
		isControlling,
	}),
);

export const connectToServer = createAction(actions.CONNECT_TO_SERVER);

export const disconnectFromServer = createAction(actions.DISCONNECT_FROM_SERVER, (message) => ({
	message,
}));

export const setFrequencySliderValue = createAction(
	actions.UPDATE_VALUE_FREQUENCY,
	(value: number) => ({
		value,
	}),
);

export const setAmplitudeSliderValue = createAction(
	actions.UPDATE_VALUE_AMPLITUDE,
	(value: number) => ({
		value,
	}),
);

export const getCurrentOscMessage = createAction(
	actions.UPDATE_OSC_VALUE,
	(address: string, args: any[]) => ({
		message: {
			address,
			args,
		},
	}),
);
