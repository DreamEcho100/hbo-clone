import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useSharedHBOState } from '@store/HBOProvider';

import Root from '@components/Root';

const RootPage: NextPage = (): JSX.Element => {
	const router = useRouter();
	const routerPush = useCallback((dist) => router.push(dist), [router]);

	const [globalState, globalDispatch] = useSharedHBOState();

	useEffect(() => {
		const loggedIn = false;
		if (loggedIn === false) {
			routerPush('/create');
		}
	}, [routerPush]);

	return <Root />;
};

export default RootPage;
