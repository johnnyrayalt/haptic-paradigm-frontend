import React from 'react';
import './xyPadInfoStyles.scss';

const XYPadInfo = (props: { xValue: number; yValue: number }) => {
	const { xValue, yValue } = props;

	return (
		<div className='xypad-info-data'>
			<p className='text'>pitch: {isNaN(xValue) ? 0 : xValue}</p>
			<p className='text'>yaw: {isNaN(yValue) ? 0 : yValue}</p>
		</div>
	);
};

export default XYPadInfo;
