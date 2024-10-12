import {mergeProps} from './merge-props.js';

describe("'mergeProps' util is working as expected", () => {
  it('merges style into a string', () => {
    expect(
      mergeProps(
        {style: 'background:red;position:absolute;'},
        {style: 'color:yellow;padding:1rem;'},
      ),
    ).toEqual({
      style: 'background:red;position:absolute;color:yellow;padding:1rem;',
    });
  });
});
