const wakeUp = () => `Acordando!!`;
const coffeeSip = () => `Bora tomar café!!`;
const sleepTime = () => `Partiu dormir!!`;
const doingThings = (task) => console.log(task());

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(coffeeSip);
doingThings(sleepTime);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
