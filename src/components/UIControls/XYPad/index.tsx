import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { BLUE } from 'resources/constants/constants';
import { IXYPadProps } from 'interfaces/Props/IXYPadProps';

const XYPad = (props: IXYPadProps) => {
	const { setCanvasSize } = props;

	const [canvasSize, updateCanvasSize] = useState(0);

	const [mouseX, updateMouseX] = useState(0);
	const [mouseY, updateMouseY] = useState(0);

	const setCanvasWidthAndHeight = (size: number) => {
		const maxDisplay = 360;

		size > maxDisplay ? updateCanvasSize(maxDisplay) : updateCanvasSize(size);
	};

	useEffect(() => {
		setCanvasWidthAndHeight(setCanvasSize);
	}, [setCanvasSize]);

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef);
	};

	const mouseMoved = (p5: p5Types) => {
		if (mouseX >= 0 && mouseX <= canvasSize && mouseY >= 0 && mouseY <= canvasSize) {
			const mapCoordX = Math.round(p5.map(mouseX, 0, canvasSize, 0, 100, true));
			const mapCoordY = Math.round(p5.map(mouseY, 0, canvasSize, 0, 100, true));

			console.log('x', mapCoordX);
			console.log('y', mapCoordY);
		}
	};

	const draw = (p5: p5Types) => {
		p5.background(0);

		updateMouseX(p5.mouseX);
		updateMouseY(p5.mouseY);

		p5.noStroke();
		p5.fill(BLUE);
		p5.ellipse(mouseX, mouseY, 25, 25);
	};

	return <Sketch setup={setup} draw={draw} mouseMoved={mouseMoved} />;
};

export default XYPad;
