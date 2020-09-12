import { TIsDocumentation } from 'interfaces/Types/TIsDocumentation';
import { TLinksOn } from 'interfaces/Types/TLinksOn';

export interface IWelcomePageProps {
	isDocumentation: TIsDocumentation;
	linksOn: TLinksOn;
	hasAdditionalInfo: boolean;
}
