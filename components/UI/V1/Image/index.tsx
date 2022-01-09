// import React from 'react';
import Image from 'next/image';

import classes from './styles.module.css';

type TExtraProps = { [key: string]: string | number | boolean | undefined | null; };
// extends typeof Image
interface IImageComponentProps {
	className?: string;
	unoptimized?: boolean;
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;
	src: string;
	alt?: string;
	placeholder?: 'blur' | 'empty';
	role?: string;
	blurDataURL?: string;
	props?: TExtraProps;
}

const ImageComponent = ({
	className = '',
	unoptimized = true,
	layout = 'fill',
	src,
	alt = '',
	placeholder = 'empty',
	role = 'img',
	blurDataURL,
	...props
}: IImageComponentProps): JSX.Element => {
	const wrapperProps = {
		className: `${className} ${classes['img-container']} ${classes['layout-fill']}`,
	};
	const imageProps: IImageComponentProps = (() => {
		const imgProps: IImageComponentProps = {
			unoptimized,
			layout,
			src,
			placeholder,
			role,
			...props
		};

		if (placeholder !== 'empty') {
			imgProps.blurDataURL = blurDataURL ? blurDataURL : src;
		}

		return imgProps;
	})();

	return (
		<div {...wrapperProps}>
			<Image alt={alt} {...imageProps} />
		</div>
	);
};

export default ImageComponent;
