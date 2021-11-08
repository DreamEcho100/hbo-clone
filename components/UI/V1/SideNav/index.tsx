import Link from 'next/link';

import { useSharedHBOState } from '@store/HBOProvider';
import { toggleSideNavDisplay } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface Props {}

const SideNav = (props: Props): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();

	return (
		<aside
			className={joinClassNames(
				helpers.dFlex,
				classes['side-nav'],
				globalState.app.settings.showSideNav ? classes.active : ''
			)}
		>
			<div
				className={joinClassNames(
					helpers.dFlex,
					helpers.xyCenter,
					classes['close-btn']
				)}
				onClick={() => toggleSideNavDisplay({ dispatch: globalDispatch })}
			>
				<i className='fas fa-times' />
			</div>
			<ul className={classes.main}>
				<li>
					<Link href='/'>
						<a className={classes.active}>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Series</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Movies</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Originals</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Just Added</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Last Chance</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Coming Soon</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Trending Now</a>
					</Link>
				</li>
			</ul>
			<div className={classes.divider} />
			<ul className={classes.main}>
				<li>
					<Link href='/'>
						<a>Action</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Animation</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Comedy</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Crime</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Documentaries</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Drama</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Fantasy & Sci-fi</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Horror</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>International</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Kids & Family</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Latino</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Music</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>News/Talk</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Reality</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Romance</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Shorts</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Sports</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Suspense</a>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default SideNav;
