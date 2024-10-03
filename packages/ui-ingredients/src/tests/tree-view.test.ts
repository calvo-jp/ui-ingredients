import {treeViewAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import TreeView from './tree-view.svelte';
import {getAnatomySelector} from './utils.js';

describe('TreeView', () => {
  it.each(getAnatomySelector(treeViewAnatomy))(
    'should render %s',
    (selector) => {
      render(TreeView);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(TreeView);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
