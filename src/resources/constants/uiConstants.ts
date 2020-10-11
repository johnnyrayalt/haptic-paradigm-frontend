import { InitialSliderOpts } from './../../components/SliderContainer/index';
import { OscMessage } from 'interfaces/Types/TOscMessage';

export const UI_SCHEMES: { [name: string]: string } = {
	XY_PAD: 'xypad',
	SLIDERS: 'sliders',
};
export const CURRENT_UI_SCHEME: string[] = [UI_SCHEMES.XY_PAD, UI_SCHEMES.SLIDERS];

export const MESSAGE = (address: string, value: number, name: string): OscMessage => ({
	address: `/${name}/${address}`,
	args: [
		{
			type: address,
			value: value,
		},
	],
});

// XYPAD DATA
export const XYPAD_NAME: string = 'xypad';
export const XYPAD_DATA: {}[] = [
	{
		address: 'x',
		value: 50,
		displayName: 'X',
	},
	{
		address: 'y',
		value: 50,
		displayName: 'Y',
	},
];

// SLIDER DATA
export const SLIDER_FILTERS: string[] = ['z'];
export const SLIDER_NAME: string = 'slider';
export const SLIDER_DATA: InitialSliderOpts[] = [
	{
		address: 'x',
		value: 50,
		displayName: 'left to right',
		settings: {
			min: 0,
			max: 100,
			step: 1,
		},
	},
	{
		address: 'y',
		value: 50,
		displayName: 'top to bottom',
		settings: {
			min: 0,
			max: 100,
			step: 1,
		},
	},
	{
		address: 'z',
		value: 2500,
		displayName: 'video pan',
		settings: {
			min: 0,
			max: 5000,
			step: 1,
		},
	},
];
