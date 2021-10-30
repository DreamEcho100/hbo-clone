import { initialState } from '@store/HBOProvider';
import { InitialStateInterface } from '../ts/interfaces';
import { ADD_USER, REMOVE_USER } from '../types';
import { ACTION_TYPE } from './ts/types';

const reducer = (
	state: InitialStateInterface,
	action: ACTION_TYPE
): InitialStateInterface => {
	switch (action.type) {
		case ADD_USER: {
			const { user } = action.payload;
			return { ...state, user };
		}

		case REMOVE_USER: {
			return initialState;
		}

		default: {
			// throw new Error();
			console.error('Error, reducer did no change!');
			return state;
		}
	}
};

export default reducer;
