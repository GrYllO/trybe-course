// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
// ou seja, é divisível por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let minNumber = 2;
let maxNumber = 50;
let maxPrimeNumber = 0;

for (let cNumber = minNumber; cNumber <= maxNumber; cNumber += 1) {
	let isPrime = true;
	for (let cDivisor = minNumber; cDivisor < cNumber; cDivisor += 1) {
		if (cNumber % cDivisor === 0) {
			isPrime = false;
		}
	}
	if (isPrime) {
		maxPrimeNumber = cNumber;
	}
}

console.log(
	`${maxPrimeNumber} is the largest prime number between ${minNumber} and ${maxNumber}.`
);
