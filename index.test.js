import { add, addString, toNumber, filterOrange } from './index';

test('add 1 + 2 to equal 3', () => {
	expect(add(undefined, 2)).toBe(NaN);
});

describe('if pass 1, then return 2', () => {
	test('add 1 + 1 toBe 2', () => {
		expect(add(1, 1)).toBe(2);
	});
});

describe('addString', () => {
	test('add a + b to match ab', () => {
		expect(addString('a', 'b')).toMatch('ab');
	});

	test('add a + 1 to match a1', () => {
		expect(addString('a', 1)).toMatch('a1');
	});

	test('add 1 + 1 return -1', () => {
		expect(addString(1, 1)).toBe(-1);
	});
});

describe('toNumber', () => {
	test('check a number', () => {
		const string = 'string';
		expect(toNumber(string).toNaN);
	});

	test('Check if the string has been converted to an integer (decimal)', () => {
		const string = '123456789';
		expect(toNumber(string)).toBe(123456789);
	});
});

describe('filterOrange', () => {
	test('Check if there is "orange element" in the array.', () => {
		const arr = ['orange', 'apple', 'peach'];
		expect(filterOrange(arr)).toStrictEqual['orange'];
	});
});
