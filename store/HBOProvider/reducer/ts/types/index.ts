import { UserInterface } from '@store/HBOProvider/ts/interfaces';
import {
	ADD_USER,
	REMOVE_USER,
	TOGGLE_ACCOUNT_MODEL_DISPLAY,
	TOGGLE_SEARCH_MODAL,
	TOGGLE_SIDE_NAV,
} from '@store/HBOProvider/types';

export type ACTION_TYPE =
	| {
			type: typeof ADD_USER;
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
	  };
