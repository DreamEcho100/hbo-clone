import { useReducer } from 'react';
import { createContainer } from '@utils/v1/react-tracked';
import reducer from './reducer';
import { InitialStateInterface } from './ts/interfaces';

export const initialState: InitialStateInterface = {
	user: {
		id: '',
		name: '',
		defaultImg: 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
		watchList: [],
		mainBackground: '',
	},
	app: {
		defaults: {
			thumbTypes: ['large-v', 'small-v', 'large-h', 'small-h'],
			mainBackgrounds: [
				'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 45%), rgba(0, 0, 0, 1) 100%',
				'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 45%), rgba(0, 0, 0, 1) 100%',
				'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 45%), rgba(0, 0, 0, 1) 100%',
				'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 45%), rgba(0, 0, 0, 1) 100%',
				'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 45%), rgba(0, 0, 0, 1) 100%',
			],
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
