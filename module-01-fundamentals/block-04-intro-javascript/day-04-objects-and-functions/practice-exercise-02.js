// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem
//  'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
	person1: "João",
	person2: "Maria",
	person3: "Jorge",
};

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com
//  as chaves e valores desse objeto.

let car = {
	model: "A3 Sedan",
	manufacturer: "Audi",
	year: 2020,
};

for (let name in names) {
	console.log(`Olá ${names[name]}`);
}

for (let carDetail in car) {
	console.log(carDetail, car[carDetail]);
}
