import { ADD_USER, REMOVE_USER } from '../types';
import { AddUserInterface } from './ts/interfaces';

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
