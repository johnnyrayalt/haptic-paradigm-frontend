import { CircularInput, CircularTrack, CircularProgress } from 'react-circular-input';
import React, { useState } from 'react';

const Knob = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<CircularInput value={value} radius={40} onChange={setValue}>
				<CircularTrack />
				<CircularProgress />
			</CircularInput>
		</div>
	);
};

export default Knob;
