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
const summationOf = (num) => {
	isValueNull(num); // Verifica se valor é nulo

	const number = Number(num);
	isNumber(number); // Verifica se é um número

	let summation = 0;
	for (let i = 1; i <= num; i += 1) {
		summation += i;
	}
	return summation;
};

// Função de interface para o usuário
const showSummation = (number) => {
	try {
		const summation = summationOf(number);
		return `A soma os números de 1 até ${number} é ${summation}`;
	} catch (error) {
		return `Erro: ${error.message}`;
	}
};

module.exports = {sum, summationOf, showSummation};
