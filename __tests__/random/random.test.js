//first we copy/pasted this into random.test.js://

const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});

//if you run npm run test, you get an error because checkIfEqual isn't a function yet.*/

/* then we created the random.js file and put one line of code that still gave us an error.*/