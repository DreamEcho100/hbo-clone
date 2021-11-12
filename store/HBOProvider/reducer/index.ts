import { initialState } from '@store/HBOProvider';
import { InitialStateInterface } from '../ts/interfaces';
import {
	ADD_ITEM_TO_WATCH_LIST,
	SET_USER,
	REMOVE_ITEM_FROM_WATCH_LIST,
	REMOVE_USER,
	TOGGLE_ACCOUNT_MODEL_DISPLAY,
	TOGGLE_SEARCH_MODAL,
	TOGGLE_SIDE_NAV,
} from '../types';
import { ACTION_TYPE } from './ts/types';

const reducer = (
	state: InitialStateInterface,
	action: ACTION_TYPE
): InitialStateInterface => {
	switch (action.type) {
		case SET_USER: {
			const { user } = action.payload;
			return { ...state, user: { ...state.user, ...user } };
		}

		case REMOVE_USER: {
			return initialState;
		}

		case TOGGLE_ACCOUNT_MODEL_DISPLAY: {
			return {
				...state,
				app: {
					...state.app,
					settings: {
						...state.app.settings,
						showAccountModal: !state.app.settings.showAccountModal,
					},
				},
			};
		}

		case TOGGLE_SIDE_NAV: {
			return {
				...state,
				app: {
					...state.app,
					settings: {
						...state.app.settings,
						showSideNav: !state.app.settings.showSideNav,
					},
				},
			};
		}

		case TOGGLE_SEARCH_MODAL: {
			return {
				...state,
				app: {
					...state.app,
					settings: {
						...state.app.settings,
						showSearchModal: !state.app.settings.showSearchModal,
					},
				},
			};
		}

		case ADD_ITEM_TO_WATCH_LIST: {
			const { item } = action.payload;

			return {
				...state,
				user: {
					...state.user,
					watchList: [...state.user.watchList, item],
				},
			};
		}

		case REMOVE_ITEM_FROM_WATCH_LIST: {
			const { mediaId } = action.payload;

			return {
				...state,
				user: {
					...state.user,
					watchList: state.user.watchList.filter(
						(item) => item.mediaId !== mediaId
					),
				},
			};
		}

		default: {
			// throw new Error();
			console.error('Error, reducer did no change!');
			return state;
		}
	}
};

export default reducer;
