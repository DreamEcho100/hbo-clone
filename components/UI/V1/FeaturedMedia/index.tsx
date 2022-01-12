import { useRouter } from 'next/router';

import { useSharedHBOState } from '@store/HBOProvider';
import { addItemToWatchList } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';
import ImageComponent from '../Image';

interface FeaturedMediaInterface {
	title: string;
	// location?: string;
	mediaUrl: string;
	linkUrl: string;
	type?: 'front' | 'single';
	mediaType?: 'movie' | 'tv';
	mediaId: string | number;
	overview?: string;
	showOverview?: boolean;
}

interface ShowMediaInterface {
	type?: FeaturedMediaInterface['type'];
	mediaUrl: FeaturedMediaInterface['mediaUrl'];
}

const ShowMedia = ({ type, mediaUrl }: ShowMediaInterface) => {
	if (type === 'front') {
		return (
			<iframe
				className={classes.video}
				width='100%'
				height='100%'
				src={mediaUrl}
				allow='accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		);
	}

	return <ImageComponent src={mediaUrl} className={classes['img-container']} />;
};

const FeaturedMedia = ({
	title,
	// location,
	mediaUrl,
	linkUrl,
	type,
	mediaType,
	mediaId,
	overview,
	showOverview,
}: FeaturedMediaInterface): JSX.Element => {
	const router = useRouter();

	const [globalState, globalDispatch] = useSharedHBOState();

	const clickedPlay = () => {
		// globalState.addItemToWatchList({
		// 	mediaId,
		// 	mediaType,
		// 	mediaUrl
		// })
		router.push(linkUrl);
		console.log('Send user to media page ' + mediaUrl);
	};

	const clickedAdd = () => {
		addItemToWatchList({
			dispatch: globalDispatch,
			item: {
				mediaId: mediaId,
				mediaType: mediaType,
				mediaUrl: mediaUrl,
			},
		});
		console.log('Clicked TO ADD MOVIE');
	};

	return (
		<>
			<section className={classes['featured-media']}>
				<ShowMedia type={type} mediaUrl={mediaUrl} />

				<div className={joinClassNames(helpers.dFlex, classes.bg)}>
					<div className={classes.container}>
						<div className={classes.title} onClick={clickedPlay}>
							<h1>
								{title}
								{/* Mortal Combat */}
							</h1>
						</div>
						<div
							className={joinClassNames(
								type === 'single' ? helpers.hideComp : '',
								classes.playing
							)}
						>
							<small>NOW PLAYING</small>
						</div>
						{/* <div
							className={joinClassNames(
								type === 'single' ? helpers.hideComp : '',
								classes.location
							)}
						>
							<small>
								{location}
							</small>
						</div> */}
						<div className={joinClassNames(helpers.dFlex, classes.buttons)}>
							<button
								className={joinClassNames(
									helpers.dFlex,
									helpers.xyCenter,
									classes['play-btn']
								)}
								onClick={clickedPlay}
							>
								<i className='fas fa-play' />
							</button>
							<button
								className={`${classes['add-btn']} ${
									type !== 'single' ? 'hideComp' : ''
								}`}
								onClick={() => clickedAdd()}
							>
								<i className='fas fa-plus' />
							</button>
							<button
								className={joinClassNames(
									type === 'single' ? helpers.hideComp : '',
									helpers.dFlex,
									helpers.xyCenter,
									classes['info-btn']
								)}
								onClick={clickedPlay}
							>
								<small>MORE INFO</small>
							</button>
						</div>
					</div>
				</div>
			</section>
			{showOverview && (
				<section className={classes.overviewSection}>
					<header>
						<h2>Overview</h2>
					</header>
					<main>
						<p>{overview}</p>
					</main>
				</section>
			)}
		</>
	);
};

export default FeaturedMedia;
