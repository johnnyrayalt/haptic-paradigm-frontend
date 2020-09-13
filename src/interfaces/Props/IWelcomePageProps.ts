import { TIsLive } from 'interfaces/Types/TIsLive';
import { TLinksOn } from 'interfaces/Types/TLinksOn';

export interface IWelcomePageProps {
	isLive: TIsLive;
	linksOn: TLinksOn;
	hasAdditionalInfo: boolean;
}
