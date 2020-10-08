import { TSliderData } from 'interfaces/Types/TSliderData';
import { OscMessage } from 'interfaces/Types/TOscMessage';

const UI_SCHEMES: { [name: string]: string } = {
	XY_PAD: 'xypad',
	SLIDERS: 'sliders',
};
export const CURRENT_UI_SCHEME: string[] = [UI_SCHEMES.SLIDERS, UI_SCHEMES.XY_PAD];

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
export const SLIDER_MIN: number = 0;
export const SLIDER_STEP: number = 1;
export const SLIDER_MAX: number = 5000;
export const SLIDER_NAME: string = 'slider';
export const SLIDER_DATA: TSliderData[] = [
	{
		address: 'x',
		value: 50,
		displayName: 'horizontal',
	},
];
