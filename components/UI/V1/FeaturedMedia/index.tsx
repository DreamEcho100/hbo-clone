import { useRouter } from 'next/router';

import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';
import ImageComponent from '../Image';

interface FeaturedMediaInterface {
	title: string;
	location?: string;
	mediaUrl: string;
	linkUrl: string;
	type?: 'front' | 'single';
	mediaType?: 'series' | 'movie' | 'tv';
	mediaId: string | number;
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
	location,
	mediaUrl,
	linkUrl,
	type,
	mediaType,
	mediaId,
}: FeaturedMediaInterface): JSX.Element => {
	const router = useRouter();

	const clickedPlay = () => {
		// globalState.addToList({
		// 	mediaId,
		// 	mediaType,
		// 	mediaUrl
		// })
		router.push(linkUrl);
		console.log('Send user to media page ' + mediaUrl);
	};

	return (
		<section className={classes['featured-media']}>
			{/* <iframe
				className={classes.video}
				width='100%'
				height='100%'
				src={videoUrl} // 'https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
				allow='accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/> */}
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
					<div
						className={joinClassNames(
							type === 'single' ? helpers.hideComp : '',
							classes.location
						)}
					>
						<small>
							{location}
							{/* In theaters and on HBO MAX. Streaming throughout May 23. */}
						</small>
					</div>
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
	);
};

export default FeaturedMedia;
