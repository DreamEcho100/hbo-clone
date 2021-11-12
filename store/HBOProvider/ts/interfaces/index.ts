import { WatchListTypes } from '../types';

type MainBackgroundsGenresUnits =
	| ''
	| 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 45%), rgba(0, 0, 0, 1) 100%'
	| 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 45%), rgba(0, 0, 0, 1) 100%'
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
			'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 45%), rgba(0, 0, 0, 1) 100%',
			'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 45%), rgba(0, 0, 0, 1) 100%',
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
