import {
	EXHIBITION_DATE,
	FEATURED_ARTIST_NAME,
	ADDITIONAL_EXHIBITION_INFO,
} from './currentProjectConstants';
import { OscMessage } from 'interfaces/Types/TOscMessage';

export const SLIDER_MIN: number = 0;
export const SLIDER_STEP: number = 1;
export const SLIDER_MAX: number = 100;

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

export const LOCAL_VIDEO_PARENT: string = '&parent=localhost';
export const HOSTED_VIDEO_PARENT: string =
	'&parent=https://haptic-paradigm.com&parent=https://www.haptic-paradigm.com';

export const TWITCH_CHANNEL_ID: string = '?channel=tealportals';
export const TWITCH_VIDEO_ID: string = '?video=732720305';

export const EXHIBITION_INFO = (hasAdditionalInfo: boolean): string =>
	`The next public viewing will be ${EXHIBITION_DATE} from ${new Date(
		Date.UTC(20, 8, 13, 20),
	).toLocaleString([], {
		hour12: true,
		hour: '2-digit',
	})} to ${new Date(Date.UTC(20, 8, 13, 23)).toLocaleString([], {
		hour12: true,
		hour: '2-digit',
	})} featuring visuals from ${FEATURED_ARTIST_NAME}${
		hasAdditionalInfo ? ADDITIONAL_EXHIBITION_INFO : ''
	}`;
