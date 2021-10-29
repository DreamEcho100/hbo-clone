import Link from 'next/link';

import { joinClassNames } from '@utils/v1/ClassName';

import classes from './styles.module.css';
import helpers from '@components/Styles/V1/helpers.module.css';

import Image from '@components/UI/V1/Image';

interface Props {}

const loopComp = (comp: JSX.Element, digit: number): JSX.Element[] => {
	let thumbnails = [];
	for (let index = 1; index <= digit; index++) {
		thumbnails.push(comp);
	}

	return thumbnails;
};

const Account = (props: Props): JSX.Element => {
	return (
		<div className={joinClassNames(helpers.dFlex, classes.account)}>
			<div className={classes.details}>
				<div className={classes.title}>My List</div>
				<div className={classes['watch-list']}>
					{loopComp(
						<div className={classes['watch-video']}>
							<Image
								className={classes['img-container']}
								src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
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
									<div className={classes['watch-circle']}>
										<i className='fas fa-times' />
									</div>
								</div>
							</div>
						</div>,
						6
					)}
				</div>
			</div>
			<div className={classes.menu}>
				<ul className={classes.main}>
					<li>
						<Link href='/'>
							<a className={classes.active}>My List</a>
						</Link>
					</li>
				</ul>
				<div className='side-nav__divider' />
				<ul className='main'>
					<li>
						<Link href='/'>Account</Link>
					</li>
					<li>
						<Link href='/'>Sign Out</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Account;
