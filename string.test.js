const {stringLength, reverseString, capitalizeString } = require('./string.js');

test('"hello" length equal to 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('"hello" reverse equal to "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('"hello" captalized equal to "HELLO"', () => {
  expect(capitalizeString('hello')).toBe('HELLO');
});