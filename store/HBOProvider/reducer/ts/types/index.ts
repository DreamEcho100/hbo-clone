import { UserInterface } from '@store/HBOProvider/ts/interfaces';
import {
	WatchListItemTypes,
	WatchListTypes,
} from '@store/HBOProvider/ts/types';
import {
	SET_USER,
	REMOVE_USER,
	TOGGLE_ACCOUNT_MODEL_DISPLAY,
	TOGGLE_SEARCH_MODAL,
	TOGGLE_SIDE_NAV,
	ADD_ITEM_TO_WATCH_LIST,
	REMOVE_ITEM_FROM_WATCH_LIST,
} from '@store/HBOProvider/types';

export type ACTION_TYPE =
	| {
			type: typeof SET_USER;
			payload: { user: UserInterface };
	  }
	| { type: typeof REMOVE_USER }
	| {
			type: typeof TOGGLE_ACCOUNT_MODEL_DISPLAY;
	  }
	| {
			type: typeof TOGGLE_SIDE_NAV;
	  }
	| {
			type: typeof TOGGLE_SEARCH_MODAL;
	  }
	| {
			type: typeof ADD_ITEM_TO_WATCH_LIST;
			payload: { item: WatchListItemTypes };
	  }
	| {
			type: typeof REMOVE_ITEM_FROM_WATCH_LIST;
			payload: { mediaId: string };
	  };
