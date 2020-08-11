import React from 'react';
import Slider from 'components/Slider';
import { useSelector } from 'react-redux';
import { CONSTANTS } from 'resources/constants';
import { actions } from 'store/actions';
import Wavy from 'components/Wavy';
import './sliderContainerStyles.scss';

const SliderContainer = () => {
	const freqValue: number = useSelector((state: any) => state.frequencySlider.value);
	const ampValue: number = useSelector((state: any) => state.amplitudeSlider.value);

	return (
		<div className='slider-container'>
			<Wavy freq={freqValue === 0 ? 1 : freqValue} />
			<Slider
				name={CONSTANTS.FREQUENCY_SLIDER}
				value={freqValue}
				type={'f'}
				actionType={actions.UPDATE_VALUE_FREQUENCY}
			/>

			<Wavy amp={ampValue === 0 ? 1 : ampValue} />
			<Slider
				name={CONSTANTS.AMPLITUDE_SLIDER}
				value={ampValue}
				type={'a'}
				actionType={actions.UPDATE_VALUE_AMPLITUDE}
			/>
		</div>
	);
};

export default SliderContainer;
