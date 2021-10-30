import { useSharedHBOState } from '@store/HBOProvider';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import { joinClassNames } from '@utils/v1/ClassName';

import Image from '@components/UI/V1/Image';

interface Props {}

const Login = (props: Props): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

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
				<div
					className={joinClassNames(
						helpers.dFlex,
						helpers.xyCenter,
						classes['user-box']
					)}
				>
					<Image
						className={classes['user-img']}
						src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
						alt=''
					/>
					<div className={classes['user-name']}>{globalState.user.name}</div>
				</div>
			</section>

			<footer className={classes.buttons}>
				<button className={classes.adult}>Add Adult</button>
				<button className={classes.kid}>Add Kid</button>
			</footer>
		</section>
	);
};

export default Login;
