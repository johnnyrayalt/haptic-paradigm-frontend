import { OscMessage } from 'interfaces/Types/TOscMessage';
import { SliderState } from 'interfaces/State/ISliderState';

export interface IRootState {
	slider: SliderState;
	oscMessage: OscMessage;
}
