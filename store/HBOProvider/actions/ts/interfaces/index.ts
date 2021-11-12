import { WatchListItemTypes } from '@store/HBOProvider/ts/types';
import { dispatchType, userType } from '../types';

export interface SetUserInterface {
	dispatch: dispatchType;
}

export interface AddUserInterface {
	userData: userType;
}

export interface SignOutUserInterface {
	dispatch: dispatchType;
}

export interface RemoveUserInterface {
	dispatch: dispatchType;
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

export interface AddItemToWatchListInterface {
	dispatch: dispatchType;
	item: WatchListItemTypes;
}

export interface RemoveItemFromWatchListInterface {
	dispatch: dispatchType;
	mediaId: string;
}
