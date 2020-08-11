import React from 'react';
import './wavyStyles.scss';

const Wavy = (props: any) => {
	let { amp, freq } = props;

	if (!amp) amp = 40;
	if (!freq) freq = 20;

	const sine = (): string => {
		let xs: any = [];
		for (var i = 0; i <= 500; i++) {
			xs.push(i);
		}
		let points = xs.map((x: any) => {
			let y = 190 + amp * Math.sin(x / freq);
			return [x, y];
		});

		let path: string = `M ${points
			.map((point: string) => {
				return point[0] + ',' + point[1];
			})
			.join(' L')}`;

		return path;
	};

	return (
		<svg
			viewBox='0 0 1 295'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMinYMin meet'
		>
			<path d={sine()}></path>
		</svg>
	);
};

export default Wavy;
