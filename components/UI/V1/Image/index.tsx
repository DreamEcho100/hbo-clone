// import React from 'react';
import Image from 'next/image';

import classes from './styles.module.css';

// extends typeof Image
interface ImageComponentInterface {
	className?: string;
	unoptimized?: boolean;
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;
	src: string;
	alt?: string;
	placeholder?: 'blur' | 'empty';
	blurDataURL?: string;
}

const ImageComponent = ({
	className = '',
	unoptimized = true,
	layout = 'fill',
	src,
	alt = '',
	placeholder = 'empty',
	blurDataURL,
}: ImageComponentInterface): JSX.Element => {
	const wrapperProps = {
		className: `${className} ${classes['img-container']} ${classes['layout-fill']}`,
	};
	const imageProps: ImageComponentInterface = (() => {
		const props: ImageComponentInterface = {
			unoptimized,
			layout,
			src,
			placeholder,
		};

		if (placeholder !== 'empty') {
			props.blurDataURL = blurDataURL ? blurDataURL : src;
		}

		return props;
	})();

	return (
		<div {...wrapperProps}>
			<Image alt={alt} {...imageProps} />
		</div>
	);
};

export default ImageComponent;
