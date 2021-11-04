import { ACTION_TYPE } from '@store/HBOProvider/reducer/ts/types';
import { InitialStateInterface } from '@store/HBOProvider/ts/interfaces';

export type dispatchType =
	| React.Dispatch<ACTION_TYPE>
	| ((value: ACTION_TYPE) => void);
export type userType = InitialStateInterface['user'];
