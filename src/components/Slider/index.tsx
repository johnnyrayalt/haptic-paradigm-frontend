import React, { useState, useEffect } from 'react';
import { SLIDER_MAX, SLIDER_MIN, SLIDER_STEP } from 'resources/constants';
import { action } from 'store';
import { actions } from 'store/actions';
import { useSelector } from 'react-redux';
import './sliderStyles.scss';
import { SLIDER_DATA } from 'resources/currentProjectConstants';
import SliderInfo from 'components/SliderInfo';

const Slider = (props: any) => {
	const { opts, value, actionType } = props;
	const { address, args } = opts;

	const min: number = SLIDER_MIN;
	const step: number = SLIDER_STEP;
	const max: number = SLIDER_MAX;

	const isControlling: any = useSelector((state: any) => state.isControlling);

	const [valueToSet, setValue] = useState(value);

	useEffect(() => {
		if (valueToSet !== value) {
			setValue(value);
		}
	}, [valueToSet, value]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const currentValue: number = Number(event.currentTarget.value);

		setValue(currentValue);

		const oscMessage = {
			address: address,
			args: [{ type: args[0].type, value: currentValue }],
		};

		action(actions.SEND_MESSAGE, oscMessage);
		action(actions.UPDATE_FROM_UI, {
			actionType: actionType,
			payload: oscMessage,
		});
	};

	const whichSlider = (): string => {
		let name: string = '';
		const type: string = args[0].type;

		for (let i = 0; i <= SLIDER_DATA.length; i++) {
			if (type === SLIDER_DATA[i].address) {
				name = SLIDER_DATA[i].displayName;
				return name;
			}
		}

		return name;
	};

	return (
		<div className='slider-data-container'>
			<SliderInfo value={value} whichSlider={whichSlider} />
			<input
				id={address}
				type='range'
				min={min}
				step={step}
				max={max}
				disabled={!isControlling}
				value={valueToSet}
				onChange={onChange}
			/>
		</div>
	);
};

export default Slider;
