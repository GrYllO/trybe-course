const getNumberOfDaysInMonth = (month) => {
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		case 2:
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		default:
			throw new Error('Mês inválido!');
	}
};

const consultDaysInMonth = () => {
	const month = document.getElementById('month').value;
	const result = document.getElementById('result');

	result.innerHTML = `O mês ${month} tem ${getNumberOfDaysInMonth(month)} dias`;
};

window.onload = () => {
	const botao = document.getElementById('button');
	botao.addEventListener('click', consultDaysInMonth);
};