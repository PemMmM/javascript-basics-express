const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  if (a === true && b === false) {
    return true;
  }
  if (a === false && b === true) {
    return true;
  }
  return false;
};

const truthiness = a => {
  return !!a;
};

const isEqual = (a, b) => {
  if (a == b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return !!(a % 2 == 1);
};

const isEven = a => {
  return !!(a % 2 == 0);
};

const isSquare = a => {
  return Math.ceil(Math.sqrt(a)) == Math.floor(Math.sqrt(a));
};

/* const startsWith = string => {
  return string.startsWith;
}; */

const startsWith = (char, string) => {
  return string.startsWith(char);
};

/* ( const startsWith = string => {
  return string.charAt(0);
}; */

// console.log();
// console.log(isEven(15));

const containsVowels = string => {
  const x = [...string].find(char => {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
  });

  return Boolean(x);
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
