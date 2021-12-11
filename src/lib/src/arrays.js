const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat([element]);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

console.log();

const numbersToStrings = numbers => {
  return numbers.join().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  const newElements = [...array];
  newElements.splice(index, 1);
  return newElements;
};

const elementsStartingWithAVowel = strings => {
  const rex = /^[aeiou]/i;
  const newString = strings.filter(str => rex.test(str));
  return newString;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

const sortByLastLetter = strings => {
  const reverseString = element =>
    element
      .split('')
      .reverse()
      .join('');
  return strings
    .map(reverseString)
    .sort()
    .map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
