import {editableAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte/svelte5';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Editable from './editable.svelte';

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
