import React, { useRef } from 'react';

interface Props {
	children: React.ReactNode;
	outerSliderClassName?: string;
	innerSliderClassName?: string;
}

interface IPosRef {
	sliderDragAnimationID: number;
	isPointing: boolean;
	isDragging: boolean;
	oldXTranslate: number;
	currXTranslate: number;
	sliderXPos: number;
	// {[key: string]: string | number | boolean | null}
	//HTMLDivElement['getBoundingClientRect'];
	// ClientRect | DOMRect
	outerSliderCoordination?: DOMRect;
	innerSliderCoordination?: DOMRect;
	firstSliderCoordination?: DOMRect;
	lastSliderCoordination?: DOMRect;
}

const Slider = ({
	children,
	outerSliderClassName,
	innerSliderClassName,
}: Props) => {
	const outerSliderRef = useRef<HTMLDivElement>(null);
	const innerSliderRef = useRef<HTMLDivElement>(null);
	const innerSliderMaskRef = useRef<HTMLDivElement>(null);

	const posRef = useRef<IPosRef>({
		sliderDragAnimationID: 0,
		isPointing: false,
		isDragging: false,
		oldXTranslate: 0,
		currXTranslate: 0,
		sliderXPos: 0,
		outerSliderCoordination: outerSliderRef.current?.getBoundingClientRect(),
		innerSliderCoordination: innerSliderRef.current?.getBoundingClientRect(),
		firstSliderCoordination:
			innerSliderRef.current?.children[0]?.getBoundingClientRect(),
		lastSliderCoordination:
			innerSliderRef.current?.children[
				innerSliderRef.current?.children?.length - 1
			]?.getBoundingClientRect(),
	});

	const getPositionX = (event: React.TouchEvent | React.MouseEvent): number => {
		// event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
		if (event.nativeEvent instanceof TouchEvent) {
			return event.nativeEvent.touches[0].clientX;
		}

		if (event.nativeEvent instanceof MouseEvent) {
			return event.nativeEvent.pageX;
		}

		return 0;
	};
	const checkSliderBoundary = (num: number) => {
		if (!outerSliderRef.current || !innerSliderRef.current) return;

		posRef.current.outerSliderCoordination =
			outerSliderRef.current?.getBoundingClientRect();

		if (num > 0) {
			posRef.current.firstSliderCoordination =
				innerSliderRef.current.children[0].getBoundingClientRect();

			if (
				posRef.current.firstSliderCoordination.left +
					posRef.current.firstSliderCoordination.width * 0.05 +
					num >
				posRef.current.outerSliderCoordination.right
			)
				return true;
		} else if (num < 0) {
			posRef.current.lastSliderCoordination =
				innerSliderRef.current.children[
					innerSliderRef.current.children.length - 1
				].getBoundingClientRect();

			if (
				posRef.current.lastSliderCoordination.right -
					posRef.current.lastSliderCoordination.width * 0.05 +
					num <
				posRef.current.outerSliderCoordination.left
			)
				return true;
		}

		return false;
	};
	const sliderDragAnimation = () => {
		setSliderPosition();
		if (posRef.current.isDragging)
			return requestAnimationFrame(sliderDragAnimation);
		return 0;
	};

	const setSliderPosition = () => {
		if (!innerSliderRef.current) return;
		innerSliderRef.current.style.transform = `translateX(${posRef.current.sliderXPos}px)`;
	};

	const touchStart = (event: React.TouchEvent | React.MouseEvent) => {
		// event.preventDefault();

		if (!outerSliderRef.current) return;

		posRef.current.isPointing = true;
		posRef.current.oldXTranslate = getPositionX(event);
		// posRef.current.isDragging = true;
		// outerSliderRef.current.style.cursor = 'grabbing';
	};

	const touchEnd = (event: React.TouchEvent | React.MouseEvent) => {
		// event.preventDefault();

		if (
			!outerSliderRef.current ||
			!innerSliderMaskRef.current ||
			typeof posRef.current.sliderDragAnimationID !== 'number'
		)
			return;

		posRef.current.isPointing = false;
		posRef.current.isDragging = false;
		// outerSliderRef.current.style.cursor = 'grab';
		innerSliderMaskRef.current.style.pointerEvents = 'none';
		innerSliderMaskRef.current.style.cursor = 'grab';
		cancelAnimationFrame(posRef.current.sliderDragAnimationID);
	};

	const touchMove = (event: React.TouchEvent | React.MouseEvent) => {
		event.preventDefault();

		if (!innerSliderMaskRef.current) return;

		if (
			!posRef.current.isPointing ||
			checkSliderBoundary(getPositionX(event) - posRef.current.oldXTranslate)
		)
			return;

		innerSliderMaskRef.current.style.pointerEvents = 'auto';
		innerSliderMaskRef.current.style.cursor = 'grabbing';
		// innerSliderRef.style.cursor = 'grabbing';

		posRef.current.currXTranslate = getPositionX(event);

		posRef.current.sliderXPos +=
			posRef.current.currXTranslate - posRef.current.oldXTranslate;

		posRef.current.sliderDragAnimationID =
			requestAnimationFrame(sliderDragAnimation);

		posRef.current.oldXTranslate = posRef.current.currXTranslate;
	};

	return (
		<div
			className={`outer-slider ${outerSliderClassName}`}
			ref={outerSliderRef}
			onTouchStart={touchStart}
			onMouseDown={touchStart}
			onTouchEnd={touchEnd}
			onMouseUp={touchEnd}
			onMouseLeave={touchEnd}
			onTouchMove={touchMove}
			onMouseMove={touchMove}
		>
			<div
				className={`inner-slider ${innerSliderClassName}`}
				style={{
					position: 'relative',
				}}
				ref={innerSliderRef}
			>
				<div
					className='slider-inner-mask'
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						pointerEvents: 'none',
					}}
					ref={innerSliderMaskRef}
					onContextMenu={(event: React.MouseEvent<HTMLDivElement>) => {
						event.preventDefault();
						event.stopPropagation();
						return false;
						// if (posRef.current.isDragging) {
						// }
					}}
				></div>
				{children}
			</div>
		</div>
	);
};

export default Slider;
