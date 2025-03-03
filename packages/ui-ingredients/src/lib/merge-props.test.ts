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
            'font-size': '16px',
          },
        },
      ),
    ).toEqual({
      style: 'color:green;margin:0px;font-size:16px;',
    });

    expect(
      mergeProps(
        {
          style: {
            color: 'red',
            margin: '0px',
          },
        },
        {
          style: 'color:green;font-size:16px;',
        },
      ),
    ).toEqual({
      style: 'color:green;margin:0px;font-size:16px;',
    });
  });
});
