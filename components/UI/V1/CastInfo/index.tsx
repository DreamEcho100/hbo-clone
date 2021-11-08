import { useState, useEffect } from 'react';
import { joinClassNames } from '@utils/v1/className';

import classes from './styles.module.css';
import helpers from '@styles/helpers.module.css';

interface CastInfoInterface {
	mediaId: string;
	mediaType?: 'movie' | 'tv';
}

interface ShowCastInterface {
	loadingData: boolean;
	cast: any[];
}

interface ShowCrewInterface {
	loadingData: boolean;
	crew: any[];
}

const crewListClasses = joinClassNames(
	classes.crew,
	helpers.dFlex,
	helpers.flexWrap
);

const ShowCast = ({ loadingData, cast }: ShowCastInterface) => {
	if (loadingData !== true) {
		return (
			<>
				{cast.map((item, index) => {
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

const ShowCrew = ({ loadingData, crew }: ShowCrewInterface) => {
	if (loadingData !== true) {
		return (
			<>
				{crew.map((item, index) => {
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

const CastInfo = ({ mediaId, mediaType = 'movie' }: CastInfoInterface) => {
	const [loadingData, setLoadingData] = useState(true);
	const [credits, setCredits] = useState({
		cast: [],
		crew: [],
	});

	// /discover/movie?with_genres=28&primary_release_year=2021
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=0987b940d511023f4a6e352711ab7d87&language=en-US`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data?.id) {
					setCredits(data);
					setLoadingData(false);
					// handle success
					console.log('Success Response For cast and crew ');
				}
			})
			.catch((error: Error) => {
				// handle error
				console.error(`Error, ${error.message}`);
			});
	}, [mediaType, mediaId]);

	return (
		<section className={classes['cast-info']}>
			{credits?.cast?.length !== 0 && (
				<div className={classes.list}>
					<h4 className={classes['group-title']}>Cast</h4>
					<ShowCast loadingData={loadingData} cast={credits.cast} />
				</div>
			)}
			{credits?.crew?.length !== 0 && (
				<div className={classes.list}>
					<h4 className={classes['group-title']}>Crew</h4>
					<ShowCrew loadingData={loadingData} crew={credits.crew} />
				</div>
			)}
		</section>
	);
};

export default CastInfo;
