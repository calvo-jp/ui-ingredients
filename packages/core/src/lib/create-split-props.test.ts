import {createSplitProps} from './create-split-props.js';

describe("'createSplitProps' util is working as expected", () => {
  test('splits props correctly', () => {
    const props = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };

    const [i, j] = createSplitProps(['a', 'b'])(props);

    expect(i).toEqual({a: 1, b: 2});
    expect(j).toEqual({c: 3, d: 4, e: 5});
  });
});
