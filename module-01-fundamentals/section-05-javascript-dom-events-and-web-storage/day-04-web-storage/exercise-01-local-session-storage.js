/* LOCAL STORAGE */
// não possui nada salvo, então o retorno é o valor: 0
console.log(localStorage.length);
// salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('firstname', 'Adam');

// salva uma entrada com a key = 'lastname' e value = 'Smith'
localStorage.setItem('lastname', 'Smith');

// retorna o valor 'Smith'
console.log(localStorage.getItem('lastname'));

// possui duas entradas, então o retorno é o valor: 2
console.log(localStorage.length);

// remove a entrada referente a key = 'lastname'
localStorage.removeItem('lastname');

// possui uma entrada, então o retorno é o valor: 1
console.log(localStorage.length);

// limpa todas as entradas salvas em localStorage
localStorage.clear();

// não possui nada salvo, então o retorno é o valor: 0
console.log(localStorage.length);

/* SESSION STORAGE */
// não possui nada salvo, então o retorno é o valor: 0
console.log(sessionStorage.length);

// salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('firstname', 'Adam');

// salva uma entrada com a key = 'lastname' e value = 'Smith'
sessionStorage.setItem('lastname', 'Smith');

// retorna o valor 'Smith'
console.log(sessionStorage.getItem('lastname'));

// possui duas entradas, então o retorno é o valor: 2
console.log(sessionStorage.length);

// remove a entrada referente a key = 'lastname'
sessionStorage.removeItem('lastname');

// possui uma entrada, então o retorno é o valor: 1
console.log(sessionStorage.length);

// limpa todas as entradas salvas em sessionStorage
sessionStorage.clear();

// não possui nada salvo, então o retorno é o valor: 0
console.log(sessionStorage.length);