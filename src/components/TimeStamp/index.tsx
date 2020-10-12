import React from 'react';
import moment from 'moment';

const TimeStamp = () => {
	return (
		<>
			<span aria-hidden='true'>
				{moment().format('L HH:mm')} :\{'>'}
			</span>{' '}
		</>
	);
};

export default TimeStamp;
