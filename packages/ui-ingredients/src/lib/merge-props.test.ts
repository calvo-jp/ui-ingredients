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
    ).toBe('a b c d f g i');
  });

  it('merges style correctly', () => {
    expect(
      mergeProps(
        {
          style: {
            color: 'red',
            margin: '0px',
          },
        },
        {
          style: {
            color: 'green',
            fontSize: '16px',
          },
        },
      ),
    ).toEqual({
      style: 'color:green;margin:0px;font-size:16px;',
    });
  });
});
