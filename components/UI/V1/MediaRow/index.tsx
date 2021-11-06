import { useEffect, useState } from 'react';

import classes from './styles.module.css';

import { shuffleArray } from '@utils/v1/arrays';
import { joinClassNames } from '@utils/v1/className';

import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

type thumbnailType = 'large-v' | 'small-v' | 'large-h' | 'small-h';

type GenresUnits =
	| 'Action'
	| 'Adventure'
	| 'Animation'
	| 'Comedy'
	| 'Crime'
	| 'Documentary'
	| 'Drama'
	| 'Family'
	| 'Fantasy'
	| 'History'
	| 'Horror'
	| 'Music'
	| 'Mystery'
	| 'Romance'
	| 'Science Fiction'
	| 'TV Movie'
	| 'Thriller'
	| 'War'
	| 'Western';

interface MediaRowPropsInterface {
	endpoint: string;
	queryFilters: {
		sort_by?: string;
		primary_release_year?: number;
		with_genres?: number;
		genres?: GenresUnits[];
		language?: string;
		include_adult?: boolean;
		include_video?: boolean;
		page?: number;
		with_watch_monetization_types?: string;
	};
	title: string;
	type: thumbnailType;
}

interface ThumbnailPropsInterface {
	movieData: {
		poster_path: string;
	};
	type: thumbnailType;
}

interface ShowThumbnailsPropsInterface {
	loadingData: boolean;
	movies: JSX.Element[];
	type: thumbnailType;
}

interface handleQueryFiltersInterface {
	[key: string]: any;
}

const ShowThumbnails = ({
	loadingData,
	movies,
	type,
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
				return <Thumbnail key={index} movieData={movie} type={type} />;
			})}
		</>
	);

const Thumbnail /*: React.FunctionComponent<ThumbnailPropsInterface>*/ = ({
	movieData,
	type,
}: ThumbnailPropsInterface) => {
	const thumbSize = (type: thumbnailType) =>
		({
			'large-v': '400',
			'small-v': '185',
			'large-h': '500',
			'small-h': '342',
		}[type]); // original

	return (
		<div className={classes.thumbnail}>
			<Image
				src={`https://image.tmdb.org/t/p/w${thumbSize(type)}${
					movieData.poster_path
				}`}
				alt=''
				className={classes['img-container']}
				placeholder='blur'
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

const handleQueryFilters = <Type extends handleQueryFiltersInterface>(
	filters: Type
): string => {
	const queryString = [];
	let filter;

	for (filter in filters) {
		queryString.push(`${filter}=${filters.filter}`);
	}

	return queryString.length !== 0 ? `&${queryString.join('&')}` : '';
};

const MediaRow = ({
	endpoint,
	queryFilters,
	title,
	type,
}: MediaRowPropsInterface) => {
	const [loadingData, setLoadingData] = useState(true);
	const [movies, setMoviesData] = useState<any[]>([]);

	// /discover/movie?with_genres=28&primary_release_year=2021
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${endpoint}?api_key=0987b940d511023f4a6e352711ab7d87${handleQueryFilters<
				MediaRowPropsInterface['queryFilters']
			>(queryFilters)}`
		)
			.then((response) => response.json())
			.then((data) => {
				// handle success
				const shuffledResults = shuffleArray(data.results);
				setMoviesData(shuffledResults);
				setLoadingData(false);
			})
			.catch(function (error: Error) {
				// handle error
				console.error('Error Response For ' + title);
				console.error(error);
			});
	}, [title, endpoint, queryFilters]);

	return (
		<div className={`${classes['media-row']} ${classes[type]}`}>
			<h3 className={classes.title}>{title}</h3>
			<div className={joinClassNames(helpers.dFlex, classes.thumbnails)}>
				<ShowThumbnails loadingData={loadingData} movies={movies} type={type} />

				{/* {loopComp(
            (<Thumbnail />), 10
            
            )} */}
			</div>
		</div>
	);
};

export default MediaRow;
