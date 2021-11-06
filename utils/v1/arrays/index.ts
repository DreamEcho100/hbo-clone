export const shuffleArray = (array: any[]) => {
	const arrayCopy = array.slice();
	let i, j;

	for (i = arrayCopy.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
	}

	return arrayCopy;
};

export default {
	shuffle: shuffleArray,
};
