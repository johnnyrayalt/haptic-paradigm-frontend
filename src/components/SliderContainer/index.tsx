import React from 'react';
import Slider from 'components/UIControls/Slider';
import { useSelector } from 'react-redux';
import { MESSAGE, SLIDER_NAME } from 'resources/constants/uiConstants';
import { actions } from 'store/actions';
import SineWave from 'components/SineWave';
import './sliderContainerStyles.scss';
import { SLIDER_DATA } from 'resources/constants/uiConstants';
import { OscMessage } from 'interfaces/Types/TOscMessage';

const SliderContainer = (props: { info: boolean; sine: boolean }) => {
	const { info, sine } = props;

	const sliderValues: { [name: string]: any } = {
		x: useSelector((state: any) => state.sliderX.value),
		y: useSelector((state: any) => state.sliderY.value),
		z: useSelector((state: any) => state.sliderZ.value),
	};

	const assembleSliderOpts = (opts: { address: string; value: number }[]): OscMessage[] => {
		const sliderOpts: OscMessage[] = [];
		opts.forEach((opt) => sliderOpts.push(MESSAGE(opt.address, opt.value, SLIDER_NAME)));

		return sliderOpts;
	};

	const returnSliders = (): JSX.Element[] => {
		const sliderData = assembleSliderOpts(SLIDER_DATA);

		return sliderData.map((sliderOpts: OscMessage) => {
			const name = sliderOpts.address.split(`/${SLIDER_NAME}/`).pop();

			return (
				<div className='slider-container-inner' key={name}>
					{sine && (
						<SineWave
							axis={sliderOpts.args[0].type}
							value={
								sliderValues[sliderOpts.args[0].type] === 0
									? 1
									: sliderValues[sliderOpts.args[0].type]
							}
						/>
					)}
					<Slider
						key={name}
						opts={sliderOpts}
						value={sliderValues[sliderOpts.args[0].type]}
						actionType={
							actions[`UPDATE_VALUE_SLIDER_${sliderOpts.args[0].type.toUpperCase()}`]
						}
						info={info}
					/>
				</div>
			);
		});
	};

	return (
		<div>
			<div className='slider-container-outer'>{returnSliders()}</div>
		</div>
	);
};

export default SliderContainer;
