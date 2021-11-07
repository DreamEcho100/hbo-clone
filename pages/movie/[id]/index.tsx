import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@components/Layouts/MainLayout';
import AuthCheck from '@hoc/AuthCheck';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';
import CastInfo from '@components/UI/V1/CastInfo';

interface SingleMediaPageInterface {
	query: {
		id: string;
	};
}

const SingleMediaPage = (props: SingleMediaPageInterface) => {
	const router = useRouter();
	const [mediaData, setMediaData] = useState({
		id: '',
		title: '',
		backdrop_path: '',
	});

	// const { id } = router.query

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US&include_video=true`
		)
			.then((response) => response.json())
			.then((data) => {
				setMediaData(data);
			})
			.catch((error: Error) => {
				// handle error
				console.error(`Error Response, ${error.message}`);
			});
	}, [props.query.id]);

	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				title={mediaData.title}
				mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
				location='In theaters and on HBO MAX. Streaming throughout May 23.'
				linkUrl={`/movie/${mediaData.id}`} // '/movies/id' // imdb_id
				type='single'
			/>
			{/* <LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-v" />}> */}
			<MediaRow
				title='Similar To This'
				type='small-v'
				endpoint={`movie/${props.query.id}/similar`}
				queryFilters={{}}
			/>
			{/* </LazyLoad> */}
			<CastInfo mediaId={props.query.id} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: { query: context.query }, // will be passed to the page component as props
	};
};

export default SingleMediaPage;
