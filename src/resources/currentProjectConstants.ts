import { TLinksOn } from 'interfaces/Types/TLinksOn';
import { TIsDocumentation } from 'interfaces/Types/TIsDocumentation';
import { TSliderData } from 'interfaces/Types/TSliderData';

export const FEATURED_ARTIST_NAME: string = 'Brenna Murphy';
export const FEATURED_ARTIST_BIO: string =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const EXHIBITION_DATE: string = 'September 13, 2020';

export const LINKS_ON: TLinksOn = false;
export const IS_DOCUMENTATION: TIsDocumentation = false;

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
