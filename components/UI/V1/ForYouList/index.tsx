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

const ForYouList = (props: Props): JSX.Element => {
	return (
		<div className={classes['foryou-list']}>
			<h3 className={classes.title}>For You</h3>
			<div className={joinClassNames(helpers.dFlex, classes.thumbnails)}>
				{loopComp(
					<div className={classes.thumbnail}>
						<Image
							className={classes['img-container']}
							src='https://cdn.shopify.com/s/files/1/0013/2874/2466/products/rick-and-morty-tv-invasion-poster-24-x-36-581_1024x.jpg?v=1616627934'
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

export default ForYouList;
