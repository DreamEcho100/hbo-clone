import type { NextPage } from 'next';

import AuthCheck from '@hoc/AuthCheck';

import Root from '@components/Root';

const RootPage: NextPage = (): JSX.Element => {
	return AuthCheck(<Root />);
};

export default RootPage;
