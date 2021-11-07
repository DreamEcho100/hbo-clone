import { useState, useEffect } from 'react';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface CastInfoInterface {
	mediaId: string;
}

interface ShowCastInterface {
	loadingData: boolean;
	credits: {
		cast: any[];
	};
}

interface ShowCrewInterface {
	loadingData: boolean;
	credits: {
		crew: any[];
	};
}

const crewListClasses = joinClassNames(
	classes.crew,
	helpers.dFlex,
	helpers.flexWrap
);

const ShowCast = ({ loadingData, credits }: ShowCastInterface) => {
	if (loadingData !== true) {
		return (
			<>
				{credits.cast.map((item, index) => {
					return (
						<ul className={crewListClasses} key={index}>
							<li>{item.character}</li>
							<li>{item.name}</li>
						</ul>
					);
				})}
			</>
		);
	}

	return <div>Loading Cast</div>;
};

const ShowCrew = ({ loadingData, credits }: ShowCrewInterface) => {
	if (loadingData !== true) {
		return (
			<>
				{credits.crew.map((item, index) => {
					return (
						<ul className={crewListClasses} key={index}>
							<li>{item.job}</li>
							<li>{item.name}</li>
						</ul>
					);
				})}
			</>
		);
	}

	return <div>Loading Crew</div>;
};

const CastInfo = ({ mediaId }: CastInfoInterface) => {
	const [loadingData, setLoadingData] = useState(true);
	const [credits, setCredits] = useState({
		cast: [],
		crew: [],
	});

	// /discover/movie?with_genres=28&primary_release_year=2021
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
		)
			.then((response) => response.json())
			.then((data) => {
				setCredits(data);
				setLoadingData(false);
				// handle success
				console.log('Success Response For cast and crew ');
			})
			.catch((error: Error) => {
				// handle error
				console.error(`Error, ${error.message}`);
			});
	}, [mediaId]);

	return (
		<section className={classes['cast-info']}>
			<h4 className={classes['group-title']}>Cast</h4>
			<div className={classes.list}>
				<div className={classes.list}>
					<ShowCast loadingData={loadingData} credits={credits} />
				</div>
				<h4 className={classes['group-title']}>Crew</h4>
				<ShowCrew loadingData={loadingData} credits={credits} />
			</div>
		</section>
	);
};

export default CastInfo;
