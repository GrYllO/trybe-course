function sum(a, b) {
	return a + b;
}

// summationOf soma todos os números até o parâmetro
// summationOf(1) -> 1
// summationOf(3) -> 6
// summationOf(5) -> 15
function summationOf(num){
	let summation = 0;
	for (let i = 1; i <= num; i += 1) {
		summation += i;
	}
	return summation;
}

module.exports = {sum, summationOf};
