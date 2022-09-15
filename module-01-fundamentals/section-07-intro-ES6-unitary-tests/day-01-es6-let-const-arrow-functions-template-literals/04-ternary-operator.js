const firstNum = 1;
const secondNum = 2;
/* let message; */

/* if (firstNum < secondNum) {
	message = 'uhuuu';
} else {
	message = 'oh no!';
} */

const message = firstNum < secondNum ? 'uhuuu' : 'oh no!'; // Apenas uma constante

console.log(message);

const funcao = (num1, num2) => num1 < num2 ? 'uhuuu' : 'oh no!'; // Uma função com 2 parâmetros

console.log(funcao(5,4));
console.log(funcao(15,6));
console.log(funcao(51,116));