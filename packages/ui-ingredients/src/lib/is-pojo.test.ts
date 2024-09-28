import {isPojo} from './is-pojo.js';

class Klass {}

describe("'isPojo' util is working as expected", () => {
  test("'{}' is a POJO", () => {
    expect(isPojo({})).toBe(true);
  });

  test("'[]' is not a POJO", () => {
    expect(isPojo([])).toBe(false);
  });

  test("'null' is not a POJO", () => {
    expect(isPojo(null)).toBe(false);
  });

  test("'Date' is not a POJO", () => {
    expect(isPojo(new Date())).toBe(false);
  });

  test('class instance is not a POJO', () => {
    expect(isPojo(new Klass())).toBe(false);
  });
});
