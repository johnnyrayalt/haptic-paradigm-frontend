import {
	setFrequencySliderValue,
	setAmplitudeSliderValue,
	getCurrentOscMessage,
	updateIsControlling,
} from './actions';
import { createReducer } from 'redux-act';
import { CONSTANTS } from 'resources/constants';
import { combineReducers } from 'redux';

const initial: any = {
	messages: {
		message: {
			address: CONSTANTS.FREQUENCY_SLIDER,
			args: [
				{
					type: 'f',
					value: 50,
				},
			],
		},
	},
	freqSlider: {
		value: 50,
	},
	ampSlider: {
		value: 50,
	},
	isControlling: false,
};

export const isControlling = createReducer(
	{
		[updateIsControlling as any]: (state: any, payload: any) => ({
			...state,
			isControlling: payload.isControlling,
		}),
	},
	initial.isControlling,
);

export const frequencySlider = createReducer(
	{
		[setFrequencySliderValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.freqSlider,
);

export const amplitudeSlider = createReducer(
	{
		[setAmplitudeSliderValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.ampSlider,
);

export const currentOscMessage = createReducer(
	{
		[getCurrentOscMessage as any]: (state: any, payload: any) => ({
			...state,
			message: { address: payload.address, args: payload.args },
		}),
	},
	initial.messages,
);

export default combineReducers({
	frequencySlider,
	amplitudeSlider,
	currentOscMessage,
	isControlling,
});
