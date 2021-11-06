import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { useSharedHBOState } from '@store/HBOProvider';
import ls from '@utils/v1/localStorage';
import useMounted from '@hooks/useMounted';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import { joinClassNames } from '@utils/v1/className';

import Image from '@components/UI/V1/Image';

interface ShowUsersPropsInterface {
	users: any[];
	selectUser: (id: string) => void;
}

const ShowUsers = ({
	users,
	selectUser,
}: ShowUsersPropsInterface): JSX.Element => {
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
							src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
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
	const users = useMemo(() => (ls.check('users') ? ls.get('users') : []), []);

	const { hasMounted } = useMounted();

	const selectUser = (id: string) => {
		ls.set('activeUID', id);
		router.push('/');
	};

	const createUser = () => {
		router.push('/');
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
				<button className={classes.adult}>Add Adult</button>
				<button className={classes.kid} onClick={createUser}>
					Create User
				</button>
			</footer>
		</section>
	);
};

export default Login;
