import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';
import React from 'react';

interface Props {}

const SearchModal = (props: Props): JSX.Element => {
	return (
		<section className={classes['search-modal']}>
			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					classes['input-group']
					// classes.active
				)}
			>
				<input
					className={classes.input}
					type='text'
					placeholder='search for a title'
					value=''
				/>
				<div className={classes['close-btn']}>
					<i className='fas fa-times' />
				</div>
			</div>

			<h3 className={classes.title}>Popular Searches</h3>

			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.flexWrap,
					classes.thumbnails
				)}
			>
				{new Array(10).fill(null).map((item, index) => (
					<div key={index} className={classes.thumbnail}>
						<Image
							className={classes['img-container']}
							src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
							alt=''
						/>
						<div
							className={joinClassNames(
								helpers.dFlex,
								helpers.xyCenter,
								classes['top-layer']
							)}
						>
							<i className='fas fa-play' />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SearchModal;
