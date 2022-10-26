const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => { console.log(element) });

const multiplyByThree = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] * 3);
  }
  return newArray;
};

module.exports = multiplyByThree;