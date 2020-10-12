import React from 'react';
import Slider from 'components/UIControls/Slider';
import { useSelector } from 'react-redux';
import { MESSAGE } from 'resources/constants/uiConstants';
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
	name: string;
	address: string;
	value: number;
	displayName: string;
	settings: SliderSettings;
}

export interface AssembleDSliderOpts {
	message: OscMessage;
	settings: SliderSettings;
	name: string;
}

const SliderContainer = (props: {
	info: boolean;
	sine: boolean;
	opts: { screenReaderMode: boolean; filters?: string[] };
}) => {
	const { info, sine, opts } = props;

	const sliderValues: { [name: string]: any } = {
		x: useSelector((state: any) => state.xyPadX.value),
		y: useSelector((state: any) => state.xyPadY.value),
		z: useSelector((state: any) => state.sliderZ.value),
	};

	const assembleSliderOpts = (opts: InitialSliderOpts[]): AssembleDSliderOpts[] => {
		const sliderOpts: AssembleDSliderOpts[] = [];
		opts.forEach((opt) =>
			sliderOpts.push({
				message: MESSAGE(opt.address, opt.value, opt.name),
				settings: {
					min: opt.settings.min,
					max: opt.settings.max,
					step: opt.settings.step,
				},
				name: opt.name,
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

		if (sliderData === undefined) {
			throw new Error('Oops');
		}

		return sliderData.map((sliderOpts: AssembleDSliderOpts) => {
			const name: string = sliderOpts.message.address
				.split(`/${sliderOpts.name}/`)
				.pop() as string;

			return (
				<div className='slider-container-inner' key={name}>
					{sine && (
						<SineWave
							axis={sliderOpts.message.args[0].type}
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
								`UPDATE_VALUE_${sliderOpts.name.toUpperCase()}_${sliderOpts.message.args[0].type.toUpperCase()}`
							]
						}
						info={info}
						screenReaderMode={opts.screenReaderMode}
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
