import Head from 'next/head';
import Image from 'next/image';

import classes from './index.module.css';

const Home = (): JSX.Element => {
	return (
		<div className={`d-flex flex-column ${classes['login-user']}`}>
			<header className={`d-flex xy-center flex-column ${classes.header}`}>
				<div className={classes.logo}></div>
				<span className={classes.title}>Who is watching?</span>
			</header>
			<form className={`d-flex xy-center ${classes.form}`}>
				<div className={`d-flex xy-center flex-column ${classes.box}`}>
					<img
						className={classes.img}
						src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
					/>
					<div className={classes.name}>
						<em>Bryant</em>
					</div>
				</div>
			</form>
			<div className={classes.buttons}>
				<button className={classes.adult} type='submit'>
					Add Adult
				</button>
				<button className={classes.kid} type='submit'>
					Add Kid
				</button>
			</div>
		</div>
	);
};

export default Home;
