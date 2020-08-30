import React from 'react';
import './wavyStyles.scss';

const Wavy = (props: any) => {
	const { axis, value } = props;

	let amp: number = 0;
	let freq: number = 0;
	let size: number = 0;

	axis !== 'x' ? (amp = 40) : (amp = value);
	axis !== 'y' ? (freq = 20) : (freq = value);
	axis !== 'z' ? (size = 50) : (size = value);

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
