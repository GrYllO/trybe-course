function sum(a, b) {
	return a + b;
}

const isValueNull = (value) => {
	if (value === '') {
		throw new Error('summationOf needs to receive a value');
	}
};

const isNumber = (number) => {
	if (Number.isNaN(number)) {
		throw new Error('summationOf must receive only numbers');
	}
};

// summationOf soma todos os números até o parâmetro
// summationOf(1) -> 1
// summationOf(3) -> 6
// summationOf(5) -> 15
function summationOf(num){
	let summation = 0;
	for (let i = 1; i <= num; i += 1) {
		summation += i;
	}
	return summation;
}

module.exports = {sum, summationOf};
