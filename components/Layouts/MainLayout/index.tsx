import { useEffect } from 'react';

import { useSharedHBOState } from '@store/HBOProvider';

import Header from '@components/UI/V1/Header';
import SideNav from '@components/UI/V1/SideNav';
import { signOutUser, setUser } from '@store/HBOProvider/actions';
import ls from '@utils/v1/localStorage';
import { useRouter } from 'next/router';

interface Props {
	children: JSX.Element[];
}

const MainLayout = ({ children }: Props): JSX.Element => {
	const router = useRouter();

	const [globalState, globalDispatch] = useSharedHBOState();

	useEffect(() => {
		if (
			globalState.app.settings.showAccountModal ||
			globalState.app.settings.showSearchModal ||
			globalState.app.settings.showSideNav
		)
			document.body.style.overflowY = 'hidden';
		else document.body.style.overflowY = 'auto';
	}, [globalState.app.settings]);

	useEffect(() => {
		setUser({
			dispatch: globalDispatch,
		});
	}, [globalDispatch]);

	useEffect(() => {
		let loggedIn = false;
		const activeUID: string = ls.check('activeUID') ? ls.get('activeUID') : '';
		const users: any[] = ls.check('users') ? ls.get('users') : '';

		if (
			activeUID.length !== 0 &&
			users.length !== 0 &&
			users.find((user) => user.id === activeUID)
		)
			loggedIn = true;

		if (!loggedIn) {
			signOutUser({ dispatch: globalDispatch });
			router.push('/login');
		}
	}, [globalDispatch, router]);

	return (
		<div
			style={{
				background: globalState.user.mainBackground
					? globalState.user.mainBackground
					: globalState.app.defaults.mainBackgrounds[
							Math.floor(
								Math.random() * globalState.app.defaults.mainBackgrounds.length
							)
					  ],
				minHeight: '100vh',
				backgroundAttachment: 'fixed',
			}}
		>
			<Header />
			<SideNav />
			<main className='content-container'>{children}</main>
		</div>
	);
};

export default MainLayout;
