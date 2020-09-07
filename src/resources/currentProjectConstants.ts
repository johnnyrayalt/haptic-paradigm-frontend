import { TLinksOn } from 'interfaces/Types/TLinksOn';
import { TIsDocumentation } from 'interfaces/Types/TIsDocumentation';
import { TSliderData } from 'interfaces/Types/TSliderData';

export const FEATURED_ARTIST_NAME: string = 'Brenna Murphy';
export const FEATURED_ARTIST_BIO: string = `Brenna Murphy works with electronic sculpture, building trans-dimensional labyrinths in an ongoing meditation on the framework of sentience and embodiment. She also works collaboratively with Birch Cooper under the collective name MSHR, building and playing with cybernetic systems of light and sound. Her most recent solo exhibition was at And/Or Gallery, where she presented a collection of her web based artworks from the last decade and archived them on her new domain: `;
export const FEATURED_ARTIST_LINK: any = 'https://lattice.tools/';

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
