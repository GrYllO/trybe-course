// Test 01 - simply run the code
// function userInfo() {
//   let userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   console.log(userEmail);
// }
// userInfo()

// Test 02 - move console.log outside the function and run it
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
console.log(userEmail);
userInfo()