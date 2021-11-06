import { useSharedHBOState } from '@store/HBOProvider';
import { toggleSearchModalDisplay } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';
import React from 'react';

interface Props {}

const SearchModal = (props: Props): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

	return (
		<section
			className={joinClassNames(
				classes['search-modal'],
				globalState.app.showSearchModal ? classes.active : ''
			)}
		>
			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					classes['input-group']
				)}
			>
				<input
					className={classes.input}
					type='text'
					placeholder='search for a title'
					value=''
				/>
				<div
					className={classes['close-btn']}
					onClick={() => toggleSearchModalDisplay({ dispatch: globalDispatch })}
				>
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
							src='https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2?imbypass=on'
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
