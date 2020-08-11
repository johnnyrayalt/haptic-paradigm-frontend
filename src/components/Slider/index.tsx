import React, { useState, useEffect } from 'react';
import { CONSTANTS } from 'resources/constants';
import { action } from 'store';
import { actions } from 'store/actions';
import { useSelector } from 'react-redux';
import './sliderStyles.scss';

const Slider = (props: any) => {
	const min: number = CONSTANTS.SLIDER_MIN;
	const step: number = CONSTANTS.SLIDER_STEP;
	const max: number = CONSTANTS.SLIDER_MAX;

	const { name, value, type, actionType } = props;

	const displayName = name.split('/slider/').pop();

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
			address: name,
			args: [{ type: type, value: currentValue }],
		};

		action(actions.SEND_MESSAGE, oscMessage);
		action(actions.UPDATE_FROM_UI, {
			actionType: actionType,
			payload: oscMessage,
		});
	};

	return (
		<>
			<div className='slider-data'>
				<p>
					CONTROL: {displayName === 'frequency' ? 'horizontal' : 'vertical'} <br />
					VALUE: {value}
				</p>
			</div>
			<input
				id={name}
				type='range'
				min={min}
				step={step}
				max={max}
				disabled={!isControlling}
				value={valueToSet}
				onChange={onChange}
			/>
		</>
	);
};

export default Slider;
