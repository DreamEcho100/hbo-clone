import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSharedHBOState } from '@store/HBOProvider';
import { toggleSearchModalDisplay } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

type ClickedThumbnailType = /*<string, T2, T3>*/ (
	type: string, // T1,
	id: string, // T2,
	media_type?: string // T3
) => void;

interface SearchResultsInterface {
	searchData: any[];
	clickedThumbnail: ClickedThumbnailType;
}
interface PopularResultsInterface {
	popData: any[];
	clickedThumbnail: ClickedThumbnailType;
}

const PopularResults = ({
	popData,
	clickedThumbnail,
}: PopularResultsInterface): JSX.Element => {
	return (
		<>
			{popData.map((item, index) => {
				return (
					<div
						key={index}
						className={classes.thumbnail}
						onClick={() => clickedThumbnail('popular', item.id)}
					>
						<Image
							className={classes['img-container']}
							src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
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
				);
			})}
		</>
	);
};

const SearchResults = ({
	searchData,
	clickedThumbnail,
}: SearchResultsInterface): JSX.Element => {
	return (
		<>
			{searchData.map((item, index) => {
				return (
					<div
						key={index}
						className={classes.thumbnail}
						onClick={() =>
							clickedThumbnail('popular', item.id, item.media_type)
						}
					>
						<Image
							className={classes['img-container']}
							src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
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
				);
			})}
		</>
	);
};

const SearchModal = (): JSX.Element => {
	const router = useRouter();

	const [globalState, globalDispatch] = useSharedHBOState();

	const [popData, setPopData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const initData = async () => {
			try {
				const popData = await fetch(
					`https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
				)
					.then((response) => response.json())
					.then((data) => data.results.slice(0, 14));

				console.log('popData', popData);
				setPopData(popData);

				setShowResults(false);
			} catch (error) {
				console.log(error);
			}
		};

		initData();
	}, []);

	const handleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			setInputValue(event.target.value);
			let searchData = await fetch(
				`https://api.themoviedb.org/3/search/multi?query=${event.target.value}&api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
			)
				.then((response) => response.json())
				.then((data) =>
					data.results.filter(
						(item: { media_type: string }) =>
							item.media_type === 'tv' || item.media_type === 'movie'
					)
				);
			setSearchData(searchData);
			setShowResults(true);
		} catch (error) {
			console.log(error);
		}
	};

	const clickedThumbnail: ClickedThumbnailType = (
		type: string,
		id: string,
		media_type?: string
	) => {
		if (type === 'popular') {
			router.push(`/movie/${id}`);
			// globalState.setSearchOpenAction(!globalState.searchOpen);
			toggleSearchModalDisplay({
				dispatch: globalDispatch,
			});
		}

		if (type === 'search') {
			router.push(`/${media_type}/${id}`);
			// globalState.setSearchOpenAction(!globalState.searchOpen);
			toggleSearchModalDisplay({
				dispatch: globalDispatch,
			});
		}
	};

	return (
		<section
			className={joinClassNames(
				classes['search-modal'],
				globalState.app.settings.showSearchModal ? classes.active : ''
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
					onChange={handleInput}
					value={inputValue}
				/>
				<div
					className={classes['close-btn']}
					onClick={() => toggleSearchModalDisplay({ dispatch: globalDispatch })}
				>
					<i className='fas fa-times' />
				</div>
			</div>

			<h3 className={classes.title}>
				{showResults && searchData.length >= 1
					? `Search Result for ${inputValue}`
					: 'Popular Searches'}
			</h3>

			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.flexWrap,
					classes.thumbnails
				)}
			>
				{/* {new Array(10).fill(null).map((item, index) => (
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
				))} */}
				{showResults && searchData.length >= 1 ? (
					<SearchResults
						searchData={searchData}
						clickedThumbnail={clickedThumbnail}
					/>
				) : (
					<PopularResults
						popData={popData}
						clickedThumbnail={clickedThumbnail}
					/>
				)}
			</div>
		</section>
	);
};

export default SearchModal;
