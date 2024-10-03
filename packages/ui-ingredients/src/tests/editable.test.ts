import {editableAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import Editable from './editable.svelte';
import {getAnatomySelector} from './utils.js';

describe('Editable', () => {
  it.each(getAnatomySelector(editableAnatomy))(
    'should render %s',
    (selector) => {
      render(Editable);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(Editable);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
