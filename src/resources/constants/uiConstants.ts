import { TSliderData } from 'interfaces/Types/TSliderData';

const UI_SCHEMES: { [name: string]: string } = {
	XY_PAD: 'xypad',
	SLIDERS: 'sliders',
};
export const CURRENT_UI_SCHEME: string = UI_SCHEMES.XY_PAD;

export const SLIDER_NAME: string = 'cube';
export const SLIDER_DATA: TSliderData[] = [
	{
		address: 'x',
		value: 50,
		displayName: 'horizontal',
	},
	{
		address: 'y',
		value: 50,
		displayName: 'vertical',
	},
	{
		address: 'z',
		value: 50,
		displayName: 'depth',
	},
];
