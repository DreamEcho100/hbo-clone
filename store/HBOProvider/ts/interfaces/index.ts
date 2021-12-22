import { WatchListTypes } from '../types';

type MainBackgroundsGenresUnits =
	| ''
	| 'linear-gradient(135deg, rgb(7 18 34) 11%, rgb(85 21 96) 45%), rgba(0, 0, 0, 1) 100%'
	| 'linear-gradient(135deg, rgb(2, 27, 64) 11%, rgb(156 175 29) 45%), 100% center rgb(0, 0, 0)'
	| 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 45%), rgba(0, 0, 0, 1) 100%'
	| 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 45%), rgba(0, 0, 0, 1) 100%'
	| 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 45%), rgba(0, 0, 0, 1) 100%';
export interface UserInterface {
	id: string;
	name: string;
	defaultImg: string;
	watchList: WatchListTypes;
	mainBackground: MainBackgroundsGenresUnits;
}

export interface AppInterface {
	defaults: {
		thumbTypes: ['large-v', 'small-v', 'large-h', 'small-h'];
		mainBackgrounds: [
			'linear-gradient(135deg, rgb(7 18 34) 11%, rgb(85 21 96) 45%), rgba(0, 0, 0, 1) 100%',
			'linear-gradient(135deg, rgb(2, 27, 64) 11%, rgb(156 175 29) 45%), 100% center rgb(0, 0, 0)',
			'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 45%), rgba(0, 0, 0, 1) 100%',
			'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 45%), rgba(0, 0, 0, 1) 100%',
			'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 45%), rgba(0, 0, 0, 1) 100%'
		];
	};
	settings: {
		showAccountModal: boolean;
		showSideNav: boolean;
		showSearchModal: boolean;
	};
}

export interface InitialStateInterface {
	user: UserInterface;
	app: AppInterface;
}
