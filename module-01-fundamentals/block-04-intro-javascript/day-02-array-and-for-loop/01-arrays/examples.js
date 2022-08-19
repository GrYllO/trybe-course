let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

// Example 01
console.log(tasksList.length);
// 3

// Example 02
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

// Example 03
tasksList.push("Fazer exercícios da Trybe"); // adiciona mais uma tarefa
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
