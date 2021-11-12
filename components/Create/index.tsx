import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import { useSharedHBOState } from '@store/HBOProvider';
import { createUser } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

const CreateUserComponent = (): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

	const router = useRouter();

	type nameType = typeof globalState.user.name;
	type mainBackgroundType = typeof globalState.user.mainBackground;

	const userDataDefault: {
		name: nameType;
		mainBackground: mainBackgroundType;
	} = {
		name: '',
		mainBackground: globalState.app.defaults.mainBackgrounds[0],
	};
	const [userData, setUserData] = useState(userDataDefault);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserData((prev) => ({
			...prev,
			name: event.target.value,
			// mainBackground: mainBackground
		}));
	};

	const handleSettingMainBackground = (item: mainBackgroundType) => {
		setUserData((prev) => ({
			...prev,
			mainBackground: item,
		}));
	};

	const saveUser = (event: React.SyntheticEvent) => {
		event.preventDefault;

		createUser({
			userData: {
				id: v4(),
				defaultImg: '',
				watchList: [],
				...userData,
			},
		});

		router.push('/login');
	};

	return (
		<div
			className={joinClassNames(
				helpers.dFlex,
				helpers.flexColumn,
				classes['create-user']
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
					helpers.flexWrap,
					classes.form
				)}
			>
				<Image
					className={classes['img-container']}
					src={
						globalState.user.defaultImg ||
						'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
					}
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
							value={userData.name}
							onChange={handleChange}
						/>
						<label htmlFor='user-name-input-text'>Name</label>
					</div>
					<div className={joinClassNames(helpers.dFlex, classes.colors)}>
						{globalState.app.defaults.mainBackgrounds.map((item: string) => (
							<div
								className={`${classes.color} ${
									userData.mainBackground === item ? classes.active : ''
								}`}
								style={{
									backgroundColor: 'rgb(2,27,64)',
									background: item,
								}}
								key={item}
								onClick={() => handleSettingMainBackground(item)}
							/>
						))}
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
				<button
					className={classes.cancel}
					onClick={() => router.push('/login')}
				>
					Cancel
				</button>
				<button className={classes.save} onClick={saveUser}>
					Save
				</button>
			</footer>
		</div>
	);
};

export default CreateUserComponent;
