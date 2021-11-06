export const setItem = (name: string, value: any): void => {
	if ((value && typeof value === 'object') || Array.isArray(value))
		localStorage.setItem(name, JSON.stringify(value));
	else localStorage.setItem(name, value);
};

export const getItem = (name: string) => {
	if (typeof window === 'undefined') return;

	const item = localStorage.getItem(name);
	if (item) {
		if (item.startsWith('{') || item.startsWith('['))
			return JSON.parse(localStorage.getItem(name)!);
		return localStorage.getItem(name);
	}

	return;
};

export const checkItem = (name: string): boolean =>
	typeof window !== 'undefined' && !!localStorage.getItem(name);

export const deleteItem = (name: string): boolean => {
	if (checkItem(name)) {
		localStorage.removeItem(name);
		return true;
	}

	return false;
};

export default {
	set: setItem,
	get: getItem,
	check: checkItem,
	delete: deleteItem,
};
