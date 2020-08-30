import React from 'react';
import Slider from 'components/Slider';
import { useSelector } from 'react-redux';
import { SLIDER, SLIDER_DATA, SLIDER_NAME } from 'resources/constants';
import { actions } from 'store/actions';
import Wavy from 'components/Wavy';
import './sliderContainerStyles.scss';
import { OscMessage } from 'interfaces/IOscMessage';

const SliderContainer = () => {
	const sliderValues: { [name: string]: any } = {
		x: useSelector((state: any) => state.sliderX.value),
		y: useSelector((state: any) => state.sliderY.value),
		z: useSelector((state: any) => state.sliderZ.value),
	};

	const assembleSliderOpts = (opts: { address: string; value: number }[]): OscMessage[] => {
		const sliderOpts: OscMessage[] = [];
		opts.forEach((opt) => sliderOpts.push(SLIDER(opt.address, opt.value)));

		return sliderOpts;
	};

	const returnSliders = (): JSX.Element[] => {
		const sliderData = assembleSliderOpts(SLIDER_DATA);

		return sliderData.map((sliderOpts: OscMessage) => {
			const name = sliderOpts.address.split(`/${SLIDER_NAME}/`).pop();

			return (
				<div key={name}>
					<Wavy
						axis={sliderOpts.args[0].type}
						value={
							sliderValues[sliderOpts.args[0].type] === 0
								? 1
								: sliderValues[sliderOpts.args[0].type]
						}
					/>
					<Slider
						key={name}
						opts={sliderOpts}
						value={sliderValues[sliderOpts.args[0].type]}
						actionType={
							actions[`UPDATE_VALUE_SLIDER_${sliderOpts.args[0].type.toUpperCase()}`]
						}
					/>
				</div>
			);
		});
	};

	return <div className='slider-container'>{returnSliders()}</div>;
};

export default SliderContainer;
