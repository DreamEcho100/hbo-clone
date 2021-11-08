export interface UserInterface {
	name: string;
	defaultImg: string;
}

export interface AppInterface {
	defaults: {
		thumbTypes: ['large-v', 'small-v', 'large-h', 'small-h'];
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
