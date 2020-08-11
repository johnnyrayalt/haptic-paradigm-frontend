import { OscMessage } from 'interfaces/IOscMessage';
import { SliderState } from 'interfaces/ISliderState';

export interface IRootState {
	slider: SliderState;
	oscMessage: OscMessage;
}
