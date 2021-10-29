import MainLayout from '@components/Layouts/MainLayout';

import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import ForYouList from '@components/UI/V1/ForYouList';
import JustAdded from '@components/UI/V1/JustAdded';
import PosterView from '@components/UI/V1/PosterView';

const Home = (): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia />
			<ForYouList />
			<JustAdded />
			<PosterView />
		</MainLayout>
	);
};

export default Home;