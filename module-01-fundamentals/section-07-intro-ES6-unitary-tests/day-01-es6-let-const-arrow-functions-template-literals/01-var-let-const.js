// Test 01 - simply run the code
/* function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo() */

// Test 02 - move console.log outside the function and run it
/* function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
console.log(userEmail);
userInfo() */

// Test 03 - swap let for var and check if its possible to access the variable
/* function userInfo() {
  var userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
console.log(userEmail);
userInfo()
 */

// Test 04 - swap var for const and check if its possible to access the variable
/* function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
console.log(userEmail);
userInfo() */

// Test 05 - why var is a bad idea
/* var x = 3;

function func(bool) {
	if (bool) {
		var x =48;
	}
	return x;
}

console.log(func(false)) */