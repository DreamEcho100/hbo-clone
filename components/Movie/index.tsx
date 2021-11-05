import MainLayout from '@components/Layouts/MainLayout';

import MediaRow from '@components/UI/V1/MediaRow';
import CastInfo from '@components/UI/V1/CastInfo';

const Movie = (): JSX.Element => {
	return (
		<MainLayout>
			<MediaRow title='Movies' type='small-v' endpoint='api/movies/234' />
			<CastInfo />
		</MainLayout>
	);
};

export default Movie;
