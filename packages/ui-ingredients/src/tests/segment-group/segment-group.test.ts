import {segmentGroupAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte/svelte5';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import SegmentGroup from './segment-group.svelte';

const items = [
  {value: '1', label: 'Item 1'},
  {value: '2', label: 'Item 2'},
  {value: '3', label: 'Item 3'},
];

describe('SegmentGroup', () => {
  it.each(getAnatomySelector(segmentGroupAnatomy))(
    'should render %s',
    (selector) => {
      render(SegmentGroup, {props: {items}});
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(SegmentGroup, {props: {items}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
