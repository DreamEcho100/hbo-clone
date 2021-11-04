export interface UserInterface {
	name: string;
	defaultImg: string;
}

export interface AppInterface {
	showAccountModal: boolean;
	showSideNav: boolean;
	showSearchModal: boolean;
}

export interface InitialStateInterface {
	user: UserInterface;
	app: AppInterface;
}
