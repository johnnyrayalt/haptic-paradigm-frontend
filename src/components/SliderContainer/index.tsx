import React from 'react';
import Slider from 'components/UIControls/Slider';
import { useSelector } from 'react-redux';
import { MESSAGE, SLIDER_NAME } from 'resources/constants/uiConstants';
import { actions } from 'store/actions';
import SineWave from 'components/SineWave';
import './sliderContainerStyles.scss';
import { SLIDER_DATA } from 'resources/constants/uiConstants';
import { OscMessage } from 'interfaces/Types/TOscMessage';

export interface SliderSettings {
	min: number;
	max: number;
	step: number;
}

export interface InitialSliderOpts {
	address: string;
	value: number;
	displayName: string;
	settings: SliderSettings;
}

export interface AssembleDSliderOpts {
	message: OscMessage;
	settings: SliderSettings;
}

const SliderContainer = (props: { info: boolean; sine: boolean; opts?: { filters: string[] } }) => {
	const { info, sine, opts } = props;

	const sliderValues: { [name: string]: any } = {
		x: useSelector((state: any) => state.sliderX.value),
		y: useSelector((state: any) => state.sliderY.value),
		z: useSelector((state: any) => state.sliderZ.value),
	};

	const assembleSliderOpts = (opts: InitialSliderOpts[]): AssembleDSliderOpts[] => {
		const sliderOpts: AssembleDSliderOpts[] = [];
		opts.forEach((opt) =>
			sliderOpts.push({
				message: MESSAGE(opt.address, opt.value, SLIDER_NAME),
				settings: {
					min: opt.settings.min,
					max: opt.settings.max,
					step: opt.settings.step,
				},
			}),
		);

		return sliderOpts;
	};

	const filter = (
		filters: string[],
		sliderData: InitialSliderOpts[],
	): InitialSliderOpts[] | undefined => {
		const filteredResuls: InitialSliderOpts[] = [];

		filters.forEach((filter) => {
			const filteredData = sliderData.find((data) => data.address === filter);

			if (filteredData === undefined) {
				console.log('Address Not Found');
				return;
			}

			filteredResuls.push(filteredData);
		});

		return filteredResuls;
	};

	const returnSliders = (filters?: string[]): JSX.Element[] => {
		let sliderData: AssembleDSliderOpts[];

		if (filters) {
			const filteredData = filter(filters, SLIDER_DATA);
			sliderData = assembleSliderOpts(
				filteredData !== undefined ? filteredData : SLIDER_DATA,
			);
		} else {
			sliderData = assembleSliderOpts(SLIDER_DATA);
		}

		return sliderData.map((sliderOpts: any) => {
			const name: string = sliderOpts.message.address.split(`/${SLIDER_NAME}/`).pop();

			return (
				<div className='slider-container-inner' key={name}>
					{sine && (
						<SineWave
							axis={sliderOpts.args[0].type}
							value={
								sliderValues[sliderOpts.message.args[0].type] === 0
									? 1
									: sliderValues[sliderOpts.message.args[0].type]
							}
						/>
					)}
					<Slider
						key={name}
						opts={sliderOpts}
						value={sliderValues[sliderOpts.message.args[0].type]}
						actionType={
							actions[
								`UPDATE_VALUE_SLIDER_${sliderOpts.message.args[0].type.toUpperCase()}`
							]
						}
						info={info}
					/>
				</div>
			);
		});
	};

	return (
		<div>
			<div className='slider-container-outer'>{returnSliders(opts?.filters)}</div>
		</div>
	);
};

export default SliderContainer;
