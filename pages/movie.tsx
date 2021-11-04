import type { NextPage } from 'next';

import AuthCheck from '@hoc/AuthCheck';

import Movie from '@components/Movie';

const MoviePage: NextPage = (): JSX.Element => {
	return AuthCheck(<Movie />);
};

export default MoviePage;
