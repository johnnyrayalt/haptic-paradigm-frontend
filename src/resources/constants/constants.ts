import { EXHIBITION_DATE, FEATURED_ARTIST_NAME } from './currentProjectConstants';
// import moment from 'moment-timezone';

export const BLUE: string = '#2727e6';

export const LOCAL_VIDEO_PARENT: string = '&parent=localhost';
export const HOSTED_VIDEO_PARENT: string =
	'&parent=haptic-paradigm.com&parent=www.haptic-paradigm.com';

export const TWITCH_CHANNEL_ID: string = '?channel=tealportals';
export const TWITCH_VIDEO_ID: string = '?video=732720305';

// const setDate = (hours: number) => {
// 	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// 	return moment(`2020-09-13T${hours}:00:00Z`).tz(timezone).format('LT');
// };

export const EXHIBITION_INFO = (): string =>
	`The next public viewing will be ${EXHIBITION_DATE} featuring visuals from ${FEATURED_ARTIST_NAME}`;
