import {isObject} from './is-object.js';

class Klass {}

describe("'isObject' util is working as expected", () => {
  test("'{}' is a plain object", () => {
    expect(isObject({})).toBe(true);
  });

  test("'[]' is not a plain object", () => {
    expect(isObject([])).toBe(false);
  });

  test("'null' is not a plain object", () => {
    expect(isObject(null)).toBe(false);
  });

  test("'Date' is not a plain object", () => {
    expect(isObject(new Date())).toBe(false);
  });

  test('class instance is not a plain object', () => {
    expect(isObject(new Klass())).toBe(false);
  });
});
