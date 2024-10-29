import {createUniqueId} from './create-unique-id.js';

describe("'createUniqueId' util is working as expected", () => {
  test('generates unique ids', () => {
    const ids = new Set();
    const len = 1000000;

    for (let i = 0; i < len; i++) {
      ids.add(createUniqueId());
    }

    expect(ids.size).toBe(len);
  });
});
