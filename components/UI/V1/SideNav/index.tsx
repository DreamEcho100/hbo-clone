import Link from 'next/link';
import { useState } from 'react';

import { useSharedHBOState } from '@store/HBOProvider';
import { toggleSideNavDisplay } from '@store/HBOProvider/actions';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface Props {}
const SideNav = (props: Props): JSX.Element => {
	const [globalState, globalDispatch] = useSharedHBOState();
	const [selectedMediaType, setSelectedMediaType] = useState<'movie' | 'tv'>(
		'movie'
	);

	const genres = {
		movie: [
			{ id: '28', title: 'Action' },
			{ id: '12', title: 'Adventure' },
			{ id: '16', title: 'Animation' },
			{ id: '35', title: 'Comedy' },
			{ id: '80', title: 'Crime' },
			{ id: '99', title: 'Documentary' },
			{ id: '18', title: 'Drama' },
			{ id: '10751', title: 'Family' },
			{ id: '14', title: 'Fantasy' },
			{ id: '36', title: 'History' },
			{ id: '27', title: 'Horror' },
			{ id: '10402', title: 'Music' },
			{ id: '9648', title: 'Mystery' },
			{ id: '10749', title: 'Romance' },
			{ id: '878', title: 'Science Fiction' },
			{ id: '10770', title: 'TV Movie' },
			{ id: '53', title: 'Thriller' },
			{ id: '10752', title: 'War' },
			{ id: '37', title: 'Western' },
		],
		tv: [
			{ id: '10759', title: 'Action, Adventure' },
			{ id: '16', title: 'Animation' },
			{ id: '35', title: 'Comedy' },
			{ id: '80', title: 'Crime' },
			{ id: '99', title: 'Documentary' },
			{ id: '18', title: 'Drama' },
			{ id: '10751', title: 'Family' },
			{ id: '10762', title: 'Kids' },
			{ id: '9648', title: 'Mystery' },
			{ id: '10763', title: 'News' },
			{ id: '10764', title: 'Reality' },
			{ id: '10765', title: 'Sci-Fi, Fantasy' },
			{ id: '10766', title: 'Soap' },
			{ id: '10767', title: 'Talk' },
			{ id: '10768', title: 'War, Politics' },
			{ id: '37', title: 'Western' },
		],
	};

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
					<Link href='/tv'>
						<a>TV</a>
					</Link>
				</li>
				<li>
					<Link href='/movie'>
						<a>Movies</a>
					</Link>
				</li>
				{/* <li>
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
				</li> */}
			</ul>
			<div className={classes.divider} />
			<ul className={classes.main}>
				<li className={classes.MediaTypeForGenres}>
					<header>
						<p>Media Type For Genres</p>
					</header>
					<button
						className={selectedMediaType === 'movie' ? classes.active : ''}
						onClick={() => setSelectedMediaType('movie')}
					>
						Movie
					</button>
					<span>|</span>
					<button
						className={selectedMediaType === 'tv' ? classes.active : ''}
						onClick={() => setSelectedMediaType('tv')}
					>
						TV
					</button>
				</li>
				{genres[selectedMediaType].map((genre, index) => (
					<li key={`${selectedMediaType}-${genre}-${index}`}>
						<Link href={`/${selectedMediaType}/genre/${genre.id}`}>
							{genre.title}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideNav;
