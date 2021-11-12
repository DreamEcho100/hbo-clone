import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSharedHBOState } from '@store/HBOProvider';
import {
	removeItemFromWatchList,
	signOutUser,
	toggleAccountModelDisplay,
} from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

import Image from '@components/UI/V1/Image';
import { Key } from 'react';

interface Props {}

const Account = (props: Props): JSX.Element => {
	const router = useRouter();

	const [globalState, globalDispatch] = useSharedHBOState();

	const watchMedia = (url: string) => {
		router.push(url);
		toggleAccountModelDisplay({
			dispatch: globalDispatch,
		});
	};

	const handleSignOut = () => {
		signOutUser({
			dispatch: globalDispatch,
		});
		router.push('/login');
	};

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
					{globalState.user.watchList.map(
						(
							item: {
								mediaUrl: string;
								title: string | undefined;
								mediaType: any;
								mediaId: any;
							},
							index: Key | null | undefined
						) => (
							<div key={index} className={classes['watch-video']}>
								<Image
									className={classes['img-container']}
									src={item.mediaUrl}
									alt={item.title}
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
											onClick={() =>
												watchMedia(`/${item.mediaType}/${item.mediaId}`)
											}
										>
											<i className='fas fa-play' />
										</div>
										<div
											className={joinClassNames(
												helpers.dFlex,
												helpers.xyCenter,
												classes['watch-circle']
											)}
											onClick={() =>
												removeItemFromWatchList({
													dispatch: globalDispatch,
													mediaId: item.mediaId,
												})
											}
										>
											<i className='fas fa-times' />
										</div>
									</div>
								</div>
							</div>
						)
					)}
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
						<button onClick={handleSignOut}>Sign Out</button>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Account;
