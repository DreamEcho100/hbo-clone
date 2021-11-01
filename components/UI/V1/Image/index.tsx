// import React from 'react';
import Image from 'next/image';

import classes from './styles.module.css';

interface Props {
	className?: string;
	unoptimized?: boolean;
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;
	src: string;
	alt?: string;
}

const ImageComponent = ({
	className = '',
	unoptimized = true,
	layout = 'fill',
	src,
	alt = '',
}: Props): JSX.Element => {
	const wrapperProps = {
		className: `${className} ${classes['img-container']} ${classes['layout-fill']}`,
	};
	const imageProps = {
		unoptimized,
		layout,
		src,
	};

	return (
		<div {...wrapperProps}>
			<Image alt={alt} {...imageProps} />
		</div>
	);
};

export default ImageComponent;
