import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import ls from '@utils/v1/localStorage';

import { useSharedHBOState } from '@store/HBOProvider';
import { createUser } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

const CreateUser = (): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();
	const router = useRouter();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		createUser({
			dispatch: globalDispatch,
			user: {
				name: event.target.value,
			},
		});
	};

	const saveUser = (event: React.SyntheticEvent) => {
		event.preventDefault;

		let users: any[] = ls.check('users') ? ls.get('users') : [],
			user;

		if (users.length < 1) {
			user = {
				id: v4(),
				name: globalState.user.name,
				myListID: [],
			};
			users.push(user);
			ls.set('users', users);
			router.push('/login');
		} else {
			user = {
				id: v4(),
				name: globalState.user.name,
				myListID: [],
			};
			users.push(user);
			ls.set('users', users);
			router.push('/login');
		}
	};

	return (
		<div
			className={joinClassNames(
				helpers.dFlex,
				helpers.flexColumn,
				classes['create-user']
			)}
		>
			<header
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					helpers.flexColumn,
					classes.header
				)}
			>
				<div className={classes.logo}></div>
				<span className={classes.title}>Who is watching?</span>
			</header>

			<form
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					classes.form
				)}
			>
				<Image
					className={classes['img-container']}
					src={globalState.defaultUserImg} // 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
					alt=''
				/>
				<div
					className={joinClassNames(
						helpers.dFlex,
						helpers.flexColumn,
						classes['input-group']
					)}
				>
					<div
						className={joinClassNames(helpers.dFlex, classes['form-control'])}
					>
						<input
							type='text'
							name='user-name'
							id='user-name-input-text'
							className={classes['user-name']}
							value={globalState.user.name}
							onChange={handleChange}
						/>
						<label htmlFor='user-name-input-text'>Name</label>
					</div>
					<div className={joinClassNames(helpers.dFlex, classes.colors)}>
						<div
							className={`${classes.color} ${classes.active}`}
							style={{
								backgroundColor: 'rgb(2,27,64)',
								background:
									'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)',
							}}
						/>
						<div
							className={`${classes.color}`}
							style={{
								backgroundColor: 'rgb(2,27,64)',
								background:
									'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 100%)',
							}}
						/>
						<div
							className={`${classes.color}`}
							style={{
								backgroundColor: 'rgb(2,27,64)',
								background:
									'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)',
							}}
						/>
						<div
							className={`${classes.color}`}
							style={{
								backgroundColor: 'rgb(2,27,64)',
								background:
									'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 100%)',
							}}
						/>
						<div
							className={`${classes.color}`}
							style={{
								backgroundColor: 'rgb(2,27,64)',
								background:
									'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 100%)',
							}}
						/>
					</div>
				</div>
			</form>

			<footer
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					helpers.flexWrap,
					classes.buttons
				)}
			>
				<button className={classes.cancel}>Cancel</button>
				<button className={classes.save} onClick={saveUser}>
					Save
				</button>
			</footer>
		</div>
	);
};

export default CreateUser;
