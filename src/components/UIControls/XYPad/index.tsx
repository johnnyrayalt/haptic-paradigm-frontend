import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { BLUE } from 'resources/constants/constants';
import { OscMessage } from 'interfaces/Types/TOscMessage';
import { MESSAGE, XYPAD_NAME } from 'resources/constants/uiConstants';
import { action } from 'store';
import { actions } from 'store/actions';
import { IXYPadProps } from 'interfaces/Props/IXYPadProps';
import XYPadInfo from 'components/XYPadInfo';
import { useSelector } from 'react-redux';
import './xyPadStyles.scss';

export interface IXYPadOpts {
	address: string;
	value: 50;
}

const XYPad = (props: IXYPadProps) => {
	const { setCanvasSize } = props;

	const isControlling: any = useSelector((state: any) => state.isControlling);
	const xyPadValues: { [name: string]: any } = {
		x: useSelector((state: any) => state.xyPadX.value),
		y: useSelector((state: any) => state.xyPadY.value),
	};

	const [canvasSize, updateCanvasSize] = useState(0);

	const [mouseX, updateMouseXPosition] = useState(0);
	const [mouseY, updateMouseYPosition] = useState(0);

	const [xValue, updateXValue] = useState(xyPadValues.x);
	const [yValue, updateYValue] = useState(xyPadValues.y);

	const setCanvasWidthAndHeight = (size: number): void => {
		const maxDisplay = 360;

		size > maxDisplay ? updateCanvasSize(maxDisplay) : updateCanvasSize(size);
	};

	useEffect(() => {
		setCanvasWidthAndHeight(setCanvasSize - 90);
	}, [setCanvasSize]);

	const setup = (p5: p5Types, CanvasParentRef: Element): void => {
		const canvas = p5.createCanvas(canvasSize, canvasSize);
		canvas.parent(CanvasParentRef);
	};

	const draw = (p5: p5Types): void => {
		p5.background(0);

		if (isControlling) {
			updateMouseXPosition(p5.mouseX);
			updateMouseYPosition(p5.mouseY);
		} else {
			updateMouseXPosition(Math.round(p5.map(xValue, 0, 100, 0, canvasSize, true)));
			updateMouseYPosition(Math.round(p5.map(yValue, 0, 100, 0, canvasSize, true)));
		}

		p5.noStroke();
		p5.fill(BLUE);
		p5.ellipse(mouseX, mouseY, 25, 25);
	};

	const trackCursorMovement = (p5: p5Types): void => {
		if (mouseX >= 0 && mouseX <= canvasSize && mouseY >= 0 && mouseY <= canvasSize) {
			const mapCoordX = Math.round(p5.map(mouseX, 0, canvasSize, 0, 100, true));
			const mapCoordY = Math.round(p5.map(mouseY, 0, canvasSize, 100, 0, true));

			updateXValue(mapCoordX);
			updateYValue(mapCoordY);

			assembleXYPadOpts([
				{ address: 'x', value: mapCoordX },
				{ address: 'y', value: mapCoordY },
			]);
		}
	};

	const resize = (p5: p5Types): void => {
		setCanvasWidthAndHeight(window.screen.width - 90);
		p5.resizeCanvas(canvasSize, canvasSize);
	};

	const assembleXYPadOpts = (opts: { address: string; value: number }[]): void => {
		const xyPadOpts: OscMessage[] = [];
		opts.forEach((opt) => xyPadOpts.push(MESSAGE(opt.address, opt.value, XYPAD_NAME)));

		return sendValues(xyPadOpts);
	};

	const sendValues = (messages: OscMessage[]): void => {
		messages.forEach((message) => {
			const actionType = actions[`UPDATE_VALUE_XYPAD_${message.args[0].type.toUpperCase()}`];

			action(actions.SEND_MESSAGE, message);
			updateUI(actionType, message);
		});
	};

	const updateUI = (actionType: string, payload: OscMessage) => {
		return action(actions.UPDATE_FROM_UI, {
			actionType: actionType,
			payload: payload,
		});
	};

	return (
		<div className='xypad-container'>
			<XYPadInfo
				xValue={isControlling ? xValue : xyPadValues.x}
				yValue={isControlling ? yValue : xyPadValues.y}
			/>
			<Sketch
				className='canvas'
				setup={setup}
				draw={draw}
				mouseMoved={trackCursorMovement}
				touchMoved={trackCursorMovement}
				windowResized={resize}
			/>
		</div>
	);
};

export default XYPad;
