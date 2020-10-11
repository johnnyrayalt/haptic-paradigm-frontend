import { XYPAD_NAME } from './../resources/constants/uiConstants';
import { MESSAGE } from 'resources/constants/uiConstants';
import {
	setSliderXValue,
	setSliderYValue,
	setSliderZValue,
	getCurrentOscMessage,
	updateIsControlling,
	setXYPadXValue,
	setXYPadYValue,
	toggleKeyboardMode,
} from './actions';
import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';

const currentMessage = XYPAD_NAME;
const initial: any = {
	messages: {
		message: MESSAGE('x', 50, currentMessage),
	},
	xyPadX: {
		value: 50,
	},
	xyPadY: {
		value: 50,
	},
	sliderX: {
		value: 50,
	},
	sliderY: {
		value: 50,
	},
	sliderZ: {
		value: 2500,
	},
	keyboardMode: {
		value: false,
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

export const xyPadX = createReducer(
	{
		[setXYPadXValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.xyPadX,
);

export const xyPadY = createReducer(
	{
		[setXYPadYValue as any]: (state: any, payload: any) => ({
			...state,
			value: payload.args[0].value,
		}),
	},
	initial.xyPadY,
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

export const keyboardMode = createReducer(
	{
		[toggleKeyboardMode as any]: (state: any, payload: any) => ({
			...state,
			value: payload,
		}),
	},
	initial.keyboardMode,
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
	xyPadX,
	xyPadY,
	sliderX,
	sliderY,
	sliderZ,
	keyboardMode,
	currentOscMessage,
	isControlling,
});
