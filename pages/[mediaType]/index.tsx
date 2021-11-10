import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { shuffleArray } from '@utils/v1/arrays';
import { useSharedHBOState } from '@store/HBOProvider';

import AuthCheck from '@hoc/AuthCheck';

import MainLayout from '@components/Layouts/MainLayout';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';
import GenreNav from '@components/UI/V1/GenreNav';

interface SingleMediaPageInterface {
	query: {
		id: string;
		mediaType: 'movie' | 'tv';
	};
	genresData: any[];
	featuredData: {
		id: string;
		backdrop_path: string;
		title: string;
		name: string;
	};
}

interface ShowRandomMediaInterface {
	genresData: any[];
	query: {
		mediaType: 'movie' | 'tv';
	};
}

const ShowRandomMedia = ({ genresData, query }: ShowRandomMediaInterface) => {
	const [globalState, globalDispatch] = useSharedHBOState();

	let thumbType;
	return (
		<>
			{genresData.map((item) => {
				thumbType = shuffleArray(globalState.app.defaults.thumbTypes)[0];
				return (
					<div key={item.id}>
						{/* <LazyLoad
        offset={-200}
        placeholder={<Placeholders title={item.name} type={thumbType}  />}> */}
						<MediaRow
							title={item.name}
							type={thumbType}
							endpoint={`discover/${query.mediaType}`}
							queryFilters={{
								with_genres: item.id,
								sort_by: 'popularity.desc',
								primary_release_year: new Date().getFullYear(),
							}}
						/>
						{/* </LazyLoad> */}
					</div>
				);
			})}
		</>
	);
};

const SingleMediaPage = ({
	genresData,
	featuredData,
	query,
}: SingleMediaPageInterface) => {
	const router = useRouter();

	const [globalState, globalDispatch] = useSharedHBOState();

	// const [mediaData, setMediaData] = useState({
	// 	id: '',
	// 	title: '',
	// 	backdrop_path: '',
	// });

	// const { id } = router.query

	/*
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${query.id}?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US&include_video=true`
		)
			.then((response) => response.json())
			.then((data) => {
				setMediaData(data);
			})
			.catch((error: Error) => {
				// handle error
				console.error(`Error Response, ${error.message}`);
			});
  }, [query.id]);
  */

	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
				title={
					query.mediaType === 'movie' ? featuredData.title : featuredData.name
				}
				linkUrl={`/${query.mediaType}/${featuredData.id}`}
				type='single'
				mediaType={query.mediaType}
				mediaId={featuredData.id}
			/>
			<GenreNav mediaType={query.mediaType} genresData={genresData} />
			<ShowRandomMedia genresData={genresData} query={query} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let genresData;
	let featuredData;
	try {
		genresData = await fetch(
			`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
		).then((response) => response.json());
		featuredData = await fetch(
			`https://api.themoviedb.org/3/discover/${
				context.query.mediaType
			}?primary_release_year=${new Date().getFullYear()}&api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
		).then((response) => response.json());
	} catch (error) {
		console.error(`Error, ${error}`);
	}
	return {
		props: {
			genresData: genresData.genres,
			featuredData: shuffleArray(featuredData.results)[0],
			query: context.query,
		}, // will be passed to the page component as props
	};
};

export default SingleMediaPage;
