import MainLayout from '@components/Layouts/MainLayout';

import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import PosterView from '@components/UI/V1/PosterView';
import CastInfo from '@components/UI/V1/CastInfo';

const Movie = (): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia />
			<PosterView />
			<CastInfo />
		</MainLayout>
	);
};

export default Movie;
