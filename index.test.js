import { add, addString, toNumber, filterOrange } from './index';

test('add 1 + 2 to equal 3', () => {
	expect(add(undefined, 2)).toBe(NaN);
});

//Task01
/*
・aとbが"a"、"b"の時"ab"となる
・aが"a", bが1の時"a1"が返る
・aが1、bが1の時-1が返る
*/

describe('addString', () => {
	test('add a + b to equal ab', () => {
		expect(addString('a', 'b')).toMatch('ab');
	});

	test('add a + 1 to match a1', () => {
		expect(addString('a', 1)).toBe('a1');
	});

	// if = false else return -1
	test('add 1 + 1 return -1', () => {
		expect(addString(1, 1)).toEqual(-1);
	});
});

describe('toNumber', () => {
	//Check if it is a number
	test('check a number', () => {
		const string = 'string';
		expect(toNumber(string).toNaN);
	});

	//Check if it text
	test('Check if the string has been converted to an integer (decimal)', () => {
		const string = '123456789';
		expect(toNumber(string)).toBe(123456789);
	});
});

describe('filterOrange', () => {
	test('Check if there is "orange element" in the array.', () => {
		const arr = ['orange', 'apple', 'peach'];
		const argument = 'orange';
		expect(new Set(arr)).toContain('orange');
		expect(filterOrange(arr, argument)).toContain('orange');
	});
});
