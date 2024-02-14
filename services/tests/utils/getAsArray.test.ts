import { getAsArray } from "../../src";

describe('getAsArray', () => {
	it.each([[], undefined, null])(`can handle empty '%s'`, (e) => {
		expect(getAsArray(e)).toEqual([]);
	});

	it('can handle single item', () => {
		expect(getAsArray({})).toEqual([{}]);
		expect(getAsArray({ test: true })).toEqual([{ test: true }]);
	});

	it('can handle array', () => {
		expect(getAsArray([{}])).toEqual([{}]);
		expect(getAsArray([{ test: true }])).toEqual([{ test: true }]);
		expect(getAsArray([{}, {}, {}])).toEqual([{}, {}, {}]);
	});
});
