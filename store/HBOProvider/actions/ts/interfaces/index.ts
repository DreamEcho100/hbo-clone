import { dispatchType, userType } from '../types';

export interface AddUserInterface {
	dispatch: dispatchType;
	user: userType;
}

export interface ToggleAccountModelDisplayInterface {
	dispatch: dispatchType;
}

export interface ToggleSideNavDisplayInterface {
	dispatch: dispatchType;
}

export interface ToggleSearchModalDisplayInterface {
	dispatch: dispatchType;
}
