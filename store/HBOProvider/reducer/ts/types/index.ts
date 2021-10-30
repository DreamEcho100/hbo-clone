import { UserInterface } from '@store/HBOProvider/ts/interfaces';
import { ADD_USER, REMOVE_USER } from '@store/HBOProvider/types';

export type ACTION_TYPE =
	| {
			type: typeof ADD_USER;
			payload: { user: UserInterface };
	  }
	| { type: typeof REMOVE_USER };
