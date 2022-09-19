const {sum, summationOf} = require('./script');

// Testa se 1 + 2 = 3
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1,2)).toBe(3);
});

// Testa se 5.1 + 6.55 = 11.65
test('adds 5.1 + 6.55 to equal 11.65', () => {
	expect(sum(5.1,6.55)).toBeCloseTo(11.65);
});

// Testa se 0 + 0 = 0
test('adds 0 + 0 to equal 0', () => {
	expect(sum(0,0)).toBe(0);
});

// Testa se -5 + -39 = -44
test('adds -5 + -39 to equal -44', () => {
	expect(sum(-5,-39)).toBe(-44);
});

// Testa se 0 + -10 = -10
test('adds 0 + -10 to equal -10', () => {
	expect(sum(0,-10)).toBe(-10);
});

test('summationOf is a function', () => {
	expect(typeof summationOf).toBe('function');
});