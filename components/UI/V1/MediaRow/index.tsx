import { useEffect, useState } from 'react';

import classes from './styles.module.css';

import { joinClassNames } from '@utils/v1/ClassName';

import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

interface MediaRowPropsInterface {
	title: string;
	type: string;
	endpoint: string;
}

interface ThumbnailPropsInterface {
	movieData: {
		poster_path: string;
	};
}

interface ShowThumbnailsPropsInterface {
	loadingData: boolean;
	movies: JSX.Element[];
}

const ShowThumbnails = ({
	loadingData,
	movies,
}: ShowThumbnailsPropsInterface): JSX.Element =>
	loadingData ? (
		<>
			{new Array(10).fill(null).map((item, index) => (
				<Skeleton key={index} />
			))}
		</>
	) : (
		<>
			{movies.map((movie: any, index) => {
				return <Thumbnail key={index} movieData={movie} />;
			})}
		</>
	);

const Thumbnail /*: React.FunctionComponent<ThumbnailPropsInterface>*/ = ({
	movieData,
}: ThumbnailPropsInterface) => {
	return (
		<div className={classes.thumbnail}>
			<Image
				src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
				alt=''
				className={classes['img-container']}
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
	);
};

const Skeleton = () => {
	return (
		<div className={classes['thumbnail-skeleton']}>
			<div className={classes['thumbnail-skeleton-img']}></div>
		</div>
	);
};

const MediaRow = ({ endpoint, title, type }: MediaRowPropsInterface) => {
	const [loadingData, setLoadingData] = useState(true);
	const [movies, setMoviesData] = useState([]);

	// /discover/movie?with_genres=28&primary_release_year=2021
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate'
		)
			.then((response) => response.json())
			.then((data) => {
				// handle success
				setMoviesData(data.results);
				setLoadingData(false);
			})
			.catch(function (error: Error) {
				// handle error
				console.error('Error Response For ' + title);
				console.error(error);
			});
	}, [title]);

	return (
		<div className={`${classes['media-row']} ${classes[type]}`}>
			<h3 className={classes.title}>{title}</h3>
			<div className={joinClassNames(helpers.dFlex, classes.thumbnails)}>
				<ShowThumbnails loadingData={loadingData} movies={movies} />

				{/* {loopComp(
            (<Thumbnail />), 10
            
            )} */}
			</div>
		</div>
	);
};

export default MediaRow;
