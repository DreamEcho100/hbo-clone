import MainLayout from '@components/Layouts/MainLayout';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';

interface Props {}

const Root = (props: Props): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia
				// videoUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
				// title='Mortal Kombat'
				// location='In theaters and on HBO MAX. Streaming throughout May 23.'
				// mediaUrl='/movies/id'
				mediaUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
				title='Mortal Kombat'
				// location='In theaters and on HBO MAX. Streaming throughout May 23.'
				linkUrl='/movie/460465'
				type='front'
				mediaType='movie'
				mediaId={460465}
				// overview={
				// 	"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
				// }
				// showOverview={false}
			/>
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
				// mediaType='series'
				mediaType='tv'
			/>
			<MediaRow
				title='Action'
				type='small-v'
				endpoint='discover/movie'
				queryFilters={{
					with_genres: 28,
					// genres: ['Action'],
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
					with_genres: 27,
					// genres: ['Horror'],
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
					with_genres: 16,
					// genres: ['Animation'],
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
					with_genres: 878,
					// genres: ['Science Fiction'],
					include_adult: true,
					include_video: true,
					primary_release_year: new Date().getFullYear(), // 2021
				}}
			/>
		</MainLayout>
	);
};

export default Root;
