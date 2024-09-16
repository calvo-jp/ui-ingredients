import {mergeProps} from './merge-props.js';

test('mergeProps', () => {
  expect(
    mergeProps(
      {style: 'background:red;position:absolute;'},
      {style: 'color:yellow;padding:1rem;'},
    ),
  ).toEqual({
    style: 'background:red;position:absolute;color:yellow;padding:1rem;',
  });
});
