const {sum, summationOf, showSummation} = require('./script');

describe('sum function tests', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(sum(1,2)).toBe(3);
	});
	it('adds 5.1 + 6.55 to equal 11.65', () => {
		expect(sum(5.1,6.55)).toBeCloseTo(11.65);
	});
	it('adds 0 + 0 to equal 0', () => {
		expect(sum(0,0)).toBe(0);
	});
	it('adds -5 + -39 to equal -44', () => {
		expect(sum(-5,-39)).toBe(-44);
	});
	it('adds 0 + -10 to equal -10', () => {
		expect(sum(0,-10)).toBe(-10);
	});
});

describe('summationOf function tests', () => {
	it('summationOf is a function', () => {
		expect(typeof summationOf).toBe('function');
	});
	it('summationOf(1) to be 1', () => {
		expect(summationOf(1)).toBe(1);
	});
	it('summationOf(3) to be 6', () => {
		expect(summationOf(3)).toBe(6);
	});
	it('summationOf(5) to be 15', () => {
		expect(summationOf(5)).toBe(15);
	});
	it("summationOf('') must throw an error", () => {
		expect(() => summationOf('')).toThrow(Error);
		expect(() => summationOf('')).toThrow('summationOf needs to receive a value');
	});
});

test('showSummation', () => {
	expect(showSummation(5)).toBe('A soma os números de 1 até 5 é 15');
});
