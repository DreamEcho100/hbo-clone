import MainLayout from '@components/Layouts/MainLayout';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';

interface Props {}

const Root = (props: Props): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia />
			{/* <MediaRow title='Movies' type='large-v' endpoint='api/movies/234' /> */}
			<MediaRow
				title='Movies'
				type='large-v'
				endpoint='discover/movie'
				queryFilters={{
					sort_by: 'popularity.desc',
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021,
				}}
			/>
			<MediaRow
				title='Series'
				type='small-h'
				endpoint='discover/tv'
				queryFilters={{
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
			<MediaRow
				title='Action'
				type='small-v'
				endpoint='discover/movie'
				queryFilters={{
					// with_genres: 28,
					genres: ['Action'],
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
			<MediaRow
				title='Horror'
				type='small-v'
				endpoint='discover/movie'
				queryFilters={{
					// with_genres: 27,
					genres: ['Horror'],
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
			<MediaRow
				title='Animations'
				type='large-h'
				endpoint='discover/movie'
				queryFilters={{
					// with_genres: 16,
					genres: ['Animation'],
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
			<MediaRow
				title='Sci-fi'
				type='small-v'
				endpoint='discover/movie'
				queryFilters={{
					// with_genres: 878,
					genres: ['Science Fiction'],
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
		</MainLayout>
	);
};

export default Root;
