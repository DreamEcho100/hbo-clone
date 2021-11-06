import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface Props {
	videoUrl: string;
	title: string;
	location: string;
	mediaUrl: string;
}

const FeaturedMedia = ({
	videoUrl,
	title,
	location,
	mediaUrl,
}: Props): JSX.Element => {
	const clickedPlay = () => {
		console.log('send user to media page ' + mediaUrl);
	};

	return (
		<section className={classes['featured-media']}>
			<iframe
				className={classes.video}
				width='100%'
				height='100%'
				src={videoUrl} // 'https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
				allow='accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>

			<div className={joinClassNames(helpers.dFlex, classes.bg)}>
				<div className={classes.container}>
					<div className={classes.title} onClick={clickedPlay}>
						<h1>
							{title}
							{/* Mortal Combat */}
						</h1>
					</div>
					<div className={classes.playing}>
						<small>NOW PLAYING</small>
					</div>
					<div className={classes.location}>
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
