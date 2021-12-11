const express = require('express');

const app = express();
app.use(express.json());

// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded());

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const restart = require('nodemon');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/src/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/src/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/src/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/src/arrays');

// strings

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

// numbers

app.get('/numbers/add/:c/and/:d', (req, res) => {
  const c = Number(req.params.c);
  const d = Number(req.params.d);

  if (Number.isNaN(c) && Number.isNaN(d)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(d, c) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

/* app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  res.send({ (a, b) });
  res.status(200).json({ result: multiply(a, b) });
}); */

// (typeof a !== 'number' && typeof b !== 'number')

app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(req.body.a) && isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(req.body.a) && isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });

  res.end(JSON.stringify(negate.req.body));
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  const a = Number(req.params.a);

  if (Number.isNaN(a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  if (isOdd(req.params.a)) {
    res.status(200).json({ result: true });
  } else {
    res.status(200).json({ result: false });
  }
});

// startsWith

/* app.get('/booleans/:string/starts-with/:character', (res, req) => {
  if (startsWith(req.params.string).length === 1) {
    res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
  }
}); */

/* app.get('/booleans/:a/starts-with/:b', (res, req) => {
  if (startsWith(req.params.a) === req.params.b) {
    res.status(200).json({ result: startsWith(req.params.b, req.params.a) });
  }
}); */

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length === 1) {
    res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
});

// arrays

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

/* app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
}); */

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

/* app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement(req.query.index, req.body.array) });
}); */

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});

module.exports = app;
