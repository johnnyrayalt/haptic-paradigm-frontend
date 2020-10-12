import { createAction } from 'redux-act';

export const actions: { [name: string]: string } = {
	UPDATE_VALUE_XYPAD_X: 'UPDATE_VALUE_XYPAD_X',
	UPDATE_VALUE_XYPAD_Y: 'UPDATE_VALUE_XYPAD_Y',
	UPDATE_VALUE_SLIDER_X: 'UPDATE_VALUE_SLIDER_X',
	UPDATE_VALUE_SLIDER_Y: 'UPDATE_VALUE_SLIDER_Y',
	UPDATE_VALUE_SLIDER_Z: 'UPDATE_VALUE_SLIDER_Z',
	UPDATE_OSC_VALUE: 'UPDATE_OSC_VALUE',
	UPDATE_FROM_UI: 'UPDATE_FROM_UI',
	UPDATE_FROM_SOCKET: 'UPDATE_FROM_SOCKET',
	CONNECT_TO_SERVER: 'CONNECT_TO_SERVER',
	DISCONNECT_FROM_SERVER: 'DISCONNECT_FROM_SERVER',
	SEND_MESSAGE: 'SEND_MESSAGE',
	RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
	IS_CONTROLLING: 'IS_CONTROLLING',
	TOGGLE_KEYBOARD_MODE: 'TOGGLE_KEYBOARD_MODE',
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

export const toggleKeyboardMode = createAction(
	actions.TOGGLE_KEYBOARD_MODE,
	(keyboardMode: boolean) => ({
		keyboardMode,
	}),
);

export const connectToServer = createAction(actions.CONNECT_TO_SERVER);

export const disconnectFromServer = createAction(actions.DISCONNECT_FROM_SERVER, (message) => ({
	message,
}));

export const setSliderXValue = createAction(actions.UPDATE_VALUE_SLIDER_X, (value: number) => ({
	value,
}));

export const setSliderYValue = createAction(actions.UPDATE_VALUE_SLIDER_Y, (value: number) => ({
	value,
}));

export const setSliderZValue = createAction(actions.UPDATE_VALUE_SLIDER_Z, (value: number) => ({
	value,
}));

export const setXYPadXValue = createAction(actions.UPDATE_VALUE_XYPAD_X, (value: number) => ({
	value,
}));

export const setXYPadYValue = createAction(actions.UPDATE_VALUE_XYPAD_Y, (value: number) => ({
	value,
}));

export const getCurrentOscMessage = createAction(
	actions.UPDATE_OSC_VALUE,
	(address: string, args: any[]) => ({
		message: {
			address,
			args,
		},
	}),
);
