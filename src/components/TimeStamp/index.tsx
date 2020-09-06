import React from 'react';
import moment from 'moment';

const TimeStamp = () => {
	return (
		<>
			<span>
				{moment().format('L HH:mm')} :\{'>'}
			</span>{' '}
		</>
	);
};

export default TimeStamp;
