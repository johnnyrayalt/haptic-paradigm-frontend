import { OscMessage } from 'interfaces/Types/IOscMessage';
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

export const LOCAL_VIDEO_PARENT: string = '&parent=localhost';
export const HOSTED_VIDEO_PARENT: string =
	'&parent=haptic-paradigm.com&parent=www.haptic-paradigm.com';

export const TWITCH_CHANNEL_ID: string = '?channel=tealportals';
export const TWITCH_VIDEO_ID: string = '?video=732720305';

export const FEATURED_ARTIST_NAME: string = 'Brenna Murphy';
export const FEATURED_ARTIST_BIO: string =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
