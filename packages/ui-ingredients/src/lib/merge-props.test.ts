import {mergeProps} from './merge-props.js';

describe("'mergeProps' util is working as expected", () => {
  it('merges class correctly', () => {
    expect(
      mergeProps(
        {class: 'a b'},
        {class: ['c', 'd e']},
        {
          class: {
            f: false,
            g: true,
          },
        },
        {
          class: [
            'h',
            {
              i: false,
              j: true,
            },
          ],
        },
      ),
    ).toEqual({class: 'a b c d e g h j'});
  });
});
