import Link from 'next/link';
import { useState } from 'react';

import classes from './styles.module.css';

// import { useSharedHBOState } from '@store/HBOProvider';

interface Props {
	genresData: any[];
	mediaType: string;
}

const GenreNav = ({ genresData, mediaType }: Props) => {
	// const [globalState, globalDispatch] = useSharedHBOState();
	const [activeNav, setActiveNav] = useState(false);
	setTimeout(() => setActiveNav(true), 100);

	return (
		<nav
			className={`${classes['genre-nav']} ${
				activeNav ? classes['active'] : ''
			}`}
		>
			<GenreList genresData={genresData} mediaType={mediaType} />
		</nav>
	);
};

const GenreList = ({ genresData, mediaType }: Props) => {
	return (
		<ul>
			{genresData.map((item) => {
				return (
					<li key={item.id}>
						<Link href={`/${mediaType}/genre/${item.id}`}>
							<a>{item.name}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default GenreNav;
