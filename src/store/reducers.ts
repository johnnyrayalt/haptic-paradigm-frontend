import { SLIDER } from 'resources/constants/constants';
import {
	setSliderXValue,
	setSliderYValue,
	setSliderZValue,
	getCurrentOscMessage,
	updateIsControlling,
} from './actions';
import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';

const initial: any = {
	messages: {
		message: SLIDER('x', 50),
	},
	sliderX: {
		value: 50,
	},
	sliderY: {
		value: 50,
	},
	sliderZ: {
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

export const sliderX = createReducer(
	{
		[setSliderXValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.sliderX,
);

export const sliderY = createReducer(
	{
		[setSliderYValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.sliderY,
);

export const sliderZ = createReducer(
	{
		[setSliderZValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.sliderZ,
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
	sliderX,
	sliderY,
	sliderZ,
	currentOscMessage,
	isControlling,
});
