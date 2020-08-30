import { OscMessage } from 'interfaces/IOscMessage';
export const SLIDER_MIN = 0;
export const SLIDER_STEP = 1;
export const SLIDER_MAX = 100;

export const SLIDER_NAME: string = 'cube';
export const SLIDER = (address: string, value: number, name: string = SLIDER_NAME): OscMessage => ({
	address: `/${name}/${address}`,
	args: [
		{
			type: address,
			value: value,
		},
	],
});

export const SLIDER_DATA = [
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
