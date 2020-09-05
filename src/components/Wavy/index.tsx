import React from 'react';
import './wavyStyles.scss';

const Wavy = (props: any) => {
	const { axis, value } = props;

	let freq: number = 0;
	let amp: number = 0;
	let size: number = 0;

	axis !== 'x' ? (freq = 20) : (freq = value);
	axis !== 'y' ? (amp = 40) : (amp = value);
	axis !== 'z' ? (size = 1) : (size = value / 100);

	const sine = (): string => {
		let xs: any = [];
		for (var i = 0; i <= window.innerWidth; i++) {
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
			version='1.1'
			viewBox='0 0 300 300'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMinYMin meet'
			height='300'
			width='100%'
		>
			<path transform={`scale(${size} ${size})`} d={sine()}></path>
		</svg>
	);
};

export default Wavy;
