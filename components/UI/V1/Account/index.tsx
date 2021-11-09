import { useEffect } from 'react';
import Link from 'next/link';

import { useSharedHBOState } from '@store/HBOProvider';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';

interface Props {}

const Account = (props: Props): JSX.Element => {
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

	return (
		<section
			className={joinClassNames(
				helpers.dFlex,
				classes.account,
				globalState.app.settings.showAccountModal ? classes.active : ''
			)}
		>
			<div className={classes.details}>
				<div className={classes.title}>My List</div>
				<div className={classes['watch-list']}>
					{new Array(6).fill(null).map((item, index) => (
						<div key={index} className={classes['watch-video']}>
							<Image
								className={classes['img-container']}
								src='https://cdn.shopify.com/s/files/1/0013/2874/2466/products/rick-and-morty-tv-invasion-poster-24-x-36-581_1024x.jpg?v=1616627934'
								alt=''
							/>
							<div
								className={joinClassNames(
									helpers.dFlex,
									helpers.xyCenter,
									classes['watch-overlay']
								)}
							>
								<div className={helpers.dFlex}>
									<div
										className={joinClassNames(
											helpers.dFlex,
											helpers.xyCenter,
											classes['watch-circle']
										)}
									>
										<i className='fas fa-play' />
									</div>
									<div
										className={joinClassNames(
											helpers.dFlex,
											helpers.xyCenter,
											classes['watch-circle']
										)}
									>
										<i className='fas fa-times' />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<nav className={classes.menu}>
				<ul className={classes.main}>
					<li>
						<Link href='/'>
							<a className={classes.active}>My List</a>
						</Link>
					</li>
				</ul>
				<div className={classes.divider} />
				<ul className='main'>
					<li>
						<Link href='/'>Account</Link>
					</li>
					<li>
						<Link href='/'>Sign Out</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Account;
