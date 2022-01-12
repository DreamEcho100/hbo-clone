import AuthCheck from '@hoc/AuthCheck';
import { useSharedHBOState } from '@store/HBOProvider';
import { shuffleArray } from '@utils/v1/arrays';
import { GetServerSideProps } from 'next';

import MainLayout from '@components/Layouts/MainLayout';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';
import GenreNav from '@components/UI/V1/GenreNav';

interface MediaTypePageInterface {
	genresData: any[];
	featuredData: {
		id: string;
		backdrop_path: string;
		title: string;
		name: string;
		results: string;
		overview: string;
	};
	query: {
		mediaType: 'tv' | 'movie';
		genre_id: string;
	};
}

interface ShowRandomMediaInterface {
	genresData: MediaTypePageInterface['genresData'];
	query: MediaTypePageInterface['query'];
}

const ShowRandomMedia = ({ genresData, query }: ShowRandomMediaInterface) => {
	const [globalState, globalDispatch] = useSharedHBOState();

	let thumbType;
	return (
		<>
			{genresData.map((item, index) => {
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
							mediaType={query.mediaType}
							queryFilters={{
								with_genres: query.genre_id,
								sort_by: 'popularity.desc',
								primary_release_year: new Date().getFullYear(),
								page: index + 1,
							}}
						/>
						{/* </LazyLoad> */}
					</div>
				);
			})}
		</>
	);
};

const MediaTypePage = ({
	genresData,
	featuredData,
	query,
}: MediaTypePageInterface) => {
	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
				title={
					query.mediaType === 'movie' ? featuredData.title : featuredData.name
				}
				linkUrl={`/${query.mediaType}/${featuredData.id}`}
				type='single'
				mediaId={featuredData.id}
				overview={featuredData.overview}
				showOverview={true}
			/>
			<GenreNav mediaType={query.mediaType} genresData={genresData} />

			<ShowRandomMedia
				genresData={genresData.filter(
					(item) => item.id === parseInt(query.genre_id)
				)}
				query={query}
			/>
		</MainLayout>
	);
};

export default MediaTypePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	let genresData;
	let featuredData;
	try {
		genresData = await fetch(
			`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		).then((response) => response.json());
		featuredData = await fetch(
			`https://api.themoviedb.org/3/discover/${
				context.query.mediaType
			}?primary_release_year=${new Date().getFullYear()}&with_genres=${
				context.query.genre_id
			}&api_key=${process.env.TMDB_API_KEY}&language=en-US`
		).then((response) => response.json());
	} catch (error) {
		if (error instanceof Error) console.error(`Error, ${error.message}`);
	}

	return {
		props: {
			genresData: genresData.genres,
			featuredData: shuffleArray(featuredData.results)[0],
			query: context.query,
		}, // will be passed to the page component as props
	};
};
