import { useReducer } from 'react';
import { createContainer } from 'react-tracked';
import reducer from './reducer';
import { InitialStateInterface } from './ts/interfaces';

export const initialState: InitialStateInterface = {
	user: {
		name: '',
		defaultImg: 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
	},
	app: {
		defaults: {
			thumbTypes: ['large-v', 'small-v', 'large-h', 'small-h'],
		},
		settings: {
			showAccountModal: false,
			showSideNav: false,
			showSearchModal: false,
		},
	},
};

const useHBOState = () => useReducer(reducer, initialState);

export const {
	Provider: SharedHBOStateProvider,
	useTracked: useSharedHBOState,
} = createContainer(useHBOState);

/*
import {
	createContext,
	useReducer,
	useContext
} from 'react';

const MyContext = createContext<ReturnType<typeof useHBOState> | null>(null);

export const useSharedHBOState = () => {
	const value = useContext(MyContext);
	if (value === null) throw new Error('Please add SharedHBOStateProvider');
	return value;
};

export const SharedHBOStateProvider: React.FC = ({ children }) => (
	<MyContext.Provider value={useHBOState()}>{children}</MyContext.Provider>
);
*/

/*
import React, { useContext, useState } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
	return useContext(StateContext);
}

export function HBOProvider({ children }) {
	const [user, setUser] = useState('');
	const defaultUserImg = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg';
	const createUserAction = (e) => {
		setUser(e.target.value);
	};

	return (
		<StateContext.Provider
			value={{
				user,
				createUserAction,
				defaultUserImg,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}
*/
