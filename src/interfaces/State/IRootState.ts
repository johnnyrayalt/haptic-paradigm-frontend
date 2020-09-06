import { OscMessage } from 'interfaces/Types/IOscMessage';
import { SliderState } from 'interfaces/State/ISliderState';

export interface IRootState {
	slider: SliderState;
	oscMessage: OscMessage;
}
