export function add(a, b) {
	return a + b;
}

export function addString(a, b) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a + b;
	} else {
		return -1;
	}
}

export function toNumber(str) {
	return parseInt(str, 10);
}

const fruit = ['orange', 'apple', 'peach'];

export function filterOrange(arr) {
	return arr.filter((e) => e === 'orange');
}

// const fruit = ['orange', 'apple', 'peach'];
// function filterOrange(arr) {
// 	return arr.filter((e) => e === 'orange');
// }

// filterOrange(fruit, 'orange');
