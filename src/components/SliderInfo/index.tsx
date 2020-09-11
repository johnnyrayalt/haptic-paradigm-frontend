import React from 'react';
import './sliderInfoStyles.scss';

const SliderInfo = (props: { value: number; whichSlider: () => {} }) => {
	const { value, whichSlider } = props;

	return (
		<div className='slider-info-data'>
			<p>
				<span>CONTROL: {whichSlider()}</span>
				<span>VALUE: {value}</span>
			</p>
		</div>
	);
};

export default SliderInfo;
