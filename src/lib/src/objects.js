const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(function(person) {
    return person.age;
  });
};

const findByName = (name, people) => {
  const person = people.find(obj => obj.name === name);
  return person;
};

const findHondas = cars => {
  const hondaCars = cars.filter(car => car.manufacturer === 'Honda');
  return hondaCars;
};

const averageAge = people => {
  const ages = people.map(person => person.age);
  const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    return sum / arr.length;
  };
  return getAverage(ages);
};

const createTalkingPerson = (name, age) => {
  function introduce(strangersName) {
    return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
  }
  return {
    name,
    age,
    introduce,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
