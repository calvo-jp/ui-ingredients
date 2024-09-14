import {isObject} from './is-object.js';

class Klass {}

test('isObject', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(new Date())).toBe(false);
  expect(isObject(new Klass())).toBe(false);
});
