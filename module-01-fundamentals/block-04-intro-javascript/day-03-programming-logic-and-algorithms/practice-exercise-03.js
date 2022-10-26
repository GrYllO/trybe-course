// 3- Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array
// e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.

let maxLetterCount = 0;
let minLetterCount = 0;
let longest;
let shortest;

for (let i = 0; i < array.length; i++) {
	switch (array[i].length > maxLetterCount) {
		case true:
			maxLetterCount = array[i].length;
			longest = array[i];
			break;
		case false:
			minLetterCount = array[i].length;
			shortest = array[i];
			break;
	}
}

console.log(`The shortest word from the string array is "${shortest}".`);
console.log(`The longest word from the string array is "${longest}".`);
