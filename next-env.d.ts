/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

export interface IMovieInfoGenre {
	id: number;
	name: string;
}
export interface IMovieInfoProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface IMovieInfoProductionCountry {
	iso_3166_1: string;
	name: string;
}
export interface IMovieInfoSpokenLanguages {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface IMovieInfo {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: string; //
	budget: number;
	genres: IMovieInfoGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IMovieInfoProductionCompany[];
	release_date: string; // Date
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

/*
adult: false
backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
belongs_to_collection: null
budget: 20000000
genres: Array(3)
0: {id: 28, name: 'Action'}
1: {id: 14, name: 'Fantasy'}
2: {id: 12, name: 'Adventure'}
length: 3
[[Prototype]]: Array(0)
homepage: "https://www.mortalkombatmovie.net"
id: 460465
imdb_id: "tt0293429"
original_language: "en"
original_title: "Mortal Kombat"
overview: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
popularity: 479.995
poster_path: "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg"
production_companies: Array(3)
0: {id: 76907, logo_path: '/wChlWsVgwSd4ZWxTIm8PTEcaESz.png', name: 'Atomic Monster', origin_country: 'US'}
1: {id: 8000, logo_path: '/f8NwLg72BByt3eav7lX1lcJfe60.png', name: 'Broken Road Productions', origin_country: 'US'}
2: {id: 12, logo_path: '/iaYpEp3LQmb8AfAtmTvpqd4149c.png', name: 'New Line Cinema', origin_country: 'US'}
length: 3
[[Prototype]]: Array(0)
production_countries: Array(1)
0: {iso_3166_1: 'US', name: 'United States of America'}
length: 1
[[Prototype]]: Array(0)
release_date: "2021-04-07"
revenue: 83601013
runtime: 110
spoken_languages: Array(3)
0: {english_name: 'Japanese', iso_639_1: 'ja', name: '日本語'}
1: {english_name: 'English', iso_639_1: 'en', name: 'English'}
2: {english_name: 'Mandarin', iso_639_1: 'zh', name: '普通话'}
length: 3
[[Prototype]]: Array(0)
status: "Released"
tagline: "Get over here."
title: "Mortal Kombat"
video: false
vote_average: 7.3
vote_count: 4250
*/
/*

const movieInit = {
	adult: false,
	backdrop_path: '',
	belongs_to_collection: '',
	budget: 0,
	genres: [],
	homepage: '',
	id: 0,
	imdb_id: '',
	original_language: '',
	original_title: '',
	overview: '',
	popularity: 0,
	poster_path: '',
	production_companies: [],
	release_date: '',
	revenue: 0,
	runtime: 0,
	status: '',
	tagline: '',
	title: '',
	video: false,
	vote_average: 0,
	vote_count: 0,
};

interface IMediaRow {
	type: 'movie' | 'tv';
	isLoading: boolean;
	data: IMovieInfo[] | [];
}
*/
/*
		const mdb = moviedb(process.env.TMDB_API_KEY as string);

		//const movieInfo =
		mdb.movieInfo({ id: 460465 }, (err, res) => {
			setFeaturedMedia(res as unknown as IMovieInfo);
			setIsLoadingFeaturedMedia(false);
			return res;
		});
*/
