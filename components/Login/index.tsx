import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@components/Styles/V1/helpers.module.css';

import Image from '@components/UI/V1/Image';

const Login = (): JSX.Element => {
	return (
		<div
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
				<div
					className={joinClassNames(
						helpers.dFlex,
						helpers.xyCenter,
						helpers.flexColumn,
						classes.box
					)}
				>
					<Image
						className={classes['img-container']}
						src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
						alt=''
					/>
					<div className={classes.name}>
						<em>Bryant</em>
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
				<button className={classes.adult} type='submit'>
					Add Adult
				</button>
				<button className={classes.kid} type='submit'>
					Add Kid
				</button>
			</footer>
		</div>
	);
};

export default Login;
