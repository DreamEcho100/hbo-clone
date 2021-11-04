import {
	ADD_USER,
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
} from './ts/interfaces';

export const createUser = ({ dispatch, user }: AddUserInterface) => {
	dispatch({
		type: ADD_USER,
		payload: { user },
	});
};

export const removeUser = ({ dispatch }: AddUserInterface) => {
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

// type ActionMap<M extends { [index: string]: any }> = {
// 	[Key in keyof M]: M[Key] extends undefined
// 		? {
// 				type: Key;
// 		  }
// 		: {
// 				type: Key;
// 				payload: M[Key];
// 		  };
// };
