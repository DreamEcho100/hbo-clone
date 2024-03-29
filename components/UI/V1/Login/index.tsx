import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useSharedHBOState } from '@store/HBOProvider';
import ls from '@utils/v1/localStorage';
import useMounted from '@hooks/useMounted';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import { joinClassNames } from '@utils/v1/className';

import Image from '@components/UI/V1/Image';
import { setUser } from '@store/HBOProvider/actions';

interface ShowUsersPropsInterface {
	users: any[];
	selectUser: (id: string) => void;
}

const ShowUsers = ({
	users,
	selectUser,
}: ShowUsersPropsInterface): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

	return (
		<>
			{users.map((user) => {
				return (
					<div
						className={joinClassNames(
							helpers.dFlex,
							helpers.xyCenter,
							classes['user-box']
						)}
						onClick={() => selectUser(user.id)}
						key={user.id}
					>
						<Image
							className={classes['user-img']}
							src={
								`https://avatars.dicebear.com/api/bottts/${
									globalState.user.name || 'lol'
								}.svg`
								// 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
							}
							alt=''
						/>
						<div className={classes['user-name']}>{user.name}</div>
					</div>
				);
			})}
		</>
	);
};

interface LoginPropsInterface {}

const Login = (props: LoginPropsInterface): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

	const router = useRouter();
	const [loadingUsers, setLoadingUsers] = useState(false);
	const users: any[] = useMemo(() => ls.get<any[]>('users', []), []);

	const { hasMounted } = useMounted();

	const selectUser = (id: string) => {
		ls.set('activeUID', id);

		setUser({
			dispatch: globalDispatch,
			// activeUID: id,
		});
		router.push('/');
	};

	const createUser = () => {
		router.push('/create');
	};

	useEffect(() => {
		if (users.length < 1) {
			setLoadingUsers(false);
		}
	}, [users]);

	return (
		<section
			className={joinClassNames(
				helpers.dFlex,
				helpers.flexColumn,
				classes['login-user']
			)}
			style={{
				background: globalState.user.mainBackground
					? globalState.user.mainBackground
					: globalState.app.defaults.mainBackgrounds[
							Math.floor(
								Math.random() * globalState.app.defaults.mainBackgrounds.length
							)
					  ],
			}}
		>
			<header
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					helpers.flexColumn,
					classes.top
				)}
			>
				<div className={classes.logo} />
				<span className={classes.title}>Who Is Watching?</span>
			</header>

			<section className={classes.form}>
				{hasMounted && !loadingUsers && (
					<ShowUsers users={users} selectUser={selectUser} />
				)}
			</section>

			<footer className={classes.buttons}>
				{/* <button className={classes.adult}>Add Adult</button> */}
				<button
					className={
						// classes.kid
						joinClassNames(
							helpers.dFlex,
							helpers.xyCenter,
							classes.createUser
						)
					}
					onClick={createUser}
				>
					Create User
				</button>
			</footer>
		</section>
	);
};

export default Login;
