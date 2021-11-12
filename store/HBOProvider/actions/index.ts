import ls from '@utils/v1/localStorage';

import {
	ADD_ITEM_TO_WATCH_LIST,
	SET_USER,
	REMOVE_ITEM_FROM_WATCH_LIST,
	REMOVE_USER,
	TOGGLE_ACCOUNT_MODEL_DISPLAY,
	TOGGLE_SEARCH_MODAL,
	TOGGLE_SIDE_NAV,
} from '../types';
import {
	AddUserInterface,
	ToggleAccountModelDisplayInterface,
	ToggleSearchModalDisplayInterface,
	ToggleSideNavDisplayInterface,
	AddItemToWatchListInterface,
	RemoveItemFromWatchListInterface,
	SetUserInterface,
	RemoveUserInterface,
	SignOutUserInterface,
} from './ts/interfaces';

export const setUser = ({ dispatch }: SetUserInterface) => {
	const users: any[] = ls.check('users') ? ls.get('users') : [];
	const activeUID: string = ls.get('activeUID');

	if (!activeUID) return;

	dispatch({
		type: SET_USER,
		payload: { user: users.find((user) => user.id === activeUID) },
	});
};

export const createUser = ({ userData }: AddUserInterface) => {
	const users: any[] = ls.check('users') ? ls.get('users') : [];

	users.unshift(userData);
	ls.set('users', users);
};

export const signOutUser = ({ dispatch }: SignOutUserInterface) => {
	const activeUID = ls.check('activeUID') ? ls.get('activeUID') : '';
	ls.delete('myWatchList');
	ls.delete('activeUID');

	dispatch({
		type: REMOVE_USER,
	});
};

export const removeUser = ({ dispatch }: RemoveUserInterface) => {
	const activeUID = ls.check('activeUID') ? ls.get('activeUID') : '';
	let users: any[] = ls.check('users') ? ls.get('users') : [];

	users = users.filter((item: { id: string }) => item.id !== activeUID);

	ls.set('users', users);
	ls.delete('myWatchList');
	ls.delete('activeUID');

	dispatch({
		type: REMOVE_USER,
	});
};

export const toggleAccountModelDisplay = ({
	dispatch,
}: ToggleAccountModelDisplayInterface) => {
	dispatch({
		type: TOGGLE_ACCOUNT_MODEL_DISPLAY,
	});
};

export const toggleSideNavDisplay = ({
	dispatch,
}: ToggleSideNavDisplayInterface) => {
	dispatch({
		type: TOGGLE_SIDE_NAV,
	});
};

export const toggleSearchModalDisplay = ({
	dispatch,
}: ToggleSearchModalDisplayInterface) => {
	dispatch({
		type: TOGGLE_SEARCH_MODAL,
	});
};

export const addItemToWatchList = ({
	dispatch,
	item,
}: AddItemToWatchListInterface) => {
	let myWatchList: any[] = ls.check('myWatchList') ? ls.get('myWatchList') : [];

	if (
		!myWatchList.find(
			(myWatchListItem) => myWatchListItem.mediaId === item.mediaId
		)
	) {
		myWatchList.push(item);

		ls.set('myWatchList', myWatchList);

		dispatch({
			type: ADD_ITEM_TO_WATCH_LIST,
			payload: { item },
		});
	}
};

export const removeItemFromWatchList = ({
	dispatch,
	mediaId,
}: RemoveItemFromWatchListInterface) => {
	let myWatchList: any[] = ls.check('myWatchList') ? ls.get('myWatchList') : [];

	if (myWatchList.length !== 0) {
		myWatchList = myWatchList.filter(
			(item: { mediaId: string }) => item.mediaId != mediaId
		);
	}

	ls.set('myWatchList', myWatchList);

	dispatch({
		type: REMOVE_ITEM_FROM_WATCH_LIST,
		payload: { mediaId },
	});
};
