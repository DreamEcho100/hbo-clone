import { GetServerSideProps } from 'next';
import MainLayout from '@components/Layouts/MainLayout';
import AuthCheck from '@hoc/AuthCheck';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';
import CastInfo from '@components/UI/V1/CastInfo';

interface SingleMediaPageInterface {
	mediaData: {
		title: string;
		backdrop_path: string;
		id: string;
		name: string;
		mediaType: string;
	};
	query: {
		id: string;
		mediaType: 'movie' | 'tv' ;
	};
}

const SingleMediaPage = ({ mediaData, query }: SingleMediaPageInterface) => {
	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				// title={mediaData.title}
				// mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
				location='In theaters and on HBO MAX. Streaming throughout May 23.'
				linkUrl={`/movie/${mediaData.id}`} // '/movies/id' // imdb_id
				type='single'
				title={query.mediaType === 'movie' ? mediaData.title : mediaData.name}
				mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
				// location="In theaters and on HBO MAX. Streaming throughout May 23."
				// linkUrl="/movies/id"
				// type="single"
				mediaType={query.mediaType}
				mediaId={query.id}
			/>
			{/* <LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-v" />}> */}
			<MediaRow
				title='Similar To This'
				type='small-v'
				endpoint={`${query.mediaType}/${query.id}/similar`}
				mediaType={query.mediaType}
				queryFilters={{}}
			/>
			{/* </LazyLoad> */}
			<CastInfo mediaId={query.id} mediaType={query.mediaType} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let mediaData;

	try {
		mediaData = await fetch(
			`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
		).then((response) => response.json());
	} catch (error) {
		console.error(`Error, ${error}`);
	}

	return {
		props: { mediaData, query: context.query }, // will be passed to the page component as props
	};
};

export default SingleMediaPage;
