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
// 	const westCoastTZ = moment.tz(`2020-10-13 ${hours}:00:00Z`, 'America/Los_Angeles');
// 	const localTime = westCoastTZ.clone().tz('America/New_York').format('LT');
// 	return localTime;
// };

export const EXHIBITION_INFO = (): string =>
	`The next public interaction will be ${EXHIBITION_DATE}, from 7pm to 9pm ADT featuring visuals from ${FEATURED_ARTIST_NAME}, and sound by Chloe Alexandra Thompson (6pm to 9pm EDT, 3pm to 6pm PDT).`;
