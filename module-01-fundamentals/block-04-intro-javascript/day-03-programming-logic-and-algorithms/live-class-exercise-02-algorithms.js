//2
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisibleByThree = 0;

for (let i = 2; i <= 150; i += 1) {
	if (i % 3 === 0) {
		divisibleByThree += 1;
	}
}

divisibleByThree === 50
	? console.log("You advanced from Level 49 to Level 50.")
	: console.log("You are dead.");