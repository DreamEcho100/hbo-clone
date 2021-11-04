import { useEffect, useState } from 'react';

const useMounted = (): { hasMounted: boolean } => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return { hasMounted };
};

export default useMounted;
