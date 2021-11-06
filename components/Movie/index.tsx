import MainLayout from '@components/Layouts/MainLayout';

import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';
import CastInfo from '@components/UI/V1/CastInfo';

const Movie = (): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia
				videoUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
				title='Mortal Kombat'
				location='In theaters and on HBO MAX. Streaming throughout May 23.'
				mediaUrl='/movies/id'
			/>
			<MediaRow
				title='Movies'
				type='small-v'
				endpoint='discover/movie'
				queryFilters={{
					sort_by: 'popularity.desc',
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021,
				}}
			/>
			<CastInfo />
		</MainLayout>
	);
};

export default Movie;
