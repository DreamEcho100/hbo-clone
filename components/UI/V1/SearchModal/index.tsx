import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@components/Styles/V1/helpers.module.css';

import Image from '@components/UI/V1/Image';

interface Props {}

const loopComp = (comp: JSX.Element, digit: number): JSX.Element[] => {
	let thumbnails = [];
	for (let index = 1; index <= digit; index++) {
		thumbnails.push(comp);
	}

	return thumbnails;
};

const SearchModal = (props: Props): JSX.Element => {
	return (
		<div className={classes['search-modal']}>
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
				{loopComp(
					<div className={classes.thumbnail}>
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
					</div>,
					10
				)}
			</div>
		</div>
	);
};

export default SearchModal;
