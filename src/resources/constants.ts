import {
	EXHIBITION_DATE,
	FEATURED_ARTIST_NAME,
	ADDITIONAL_EXHIBITION_INFO,
} from './currentProjectConstants';
import { OscMessage } from 'interfaces/Types/TOscMessage';
import moment from 'moment-timezone';

export const SLIDER_MIN: number = 0;
export const SLIDER_STEP: number = 1;
export const SLIDER_MAX: number = 100;

export const BLUE: string = '#2727e6';

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
	'&parent=haptic-paradigm.com&parent=www.haptic-paradigm.com';

export const TWITCH_CHANNEL_ID: string = '?channel=tealportals';
export const TWITCH_VIDEO_ID: string = '?video=732720305';

const setDate = (hours: number) => {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return moment(`2020-09-13T${hours}:00:00Z`).tz(timezone).format('LT');
};

export const EXHIBITION_INFO = (hasAdditionalInfo: boolean): string =>
	`The last public viewing was ${EXHIBITION_DATE} from ${setDate(19)}
    to ${setDate(22)} featuring visuals from ${FEATURED_ARTIST_NAME}${
		hasAdditionalInfo ? ADDITIONAL_EXHIBITION_INFO : ''
	}`;
