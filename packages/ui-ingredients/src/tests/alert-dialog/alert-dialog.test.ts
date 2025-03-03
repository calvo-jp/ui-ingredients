import {alertDialogAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import AlertDialog from './alert-dialog.svelte';

describe.skip('AlertDialog', () => {
  it.each(getAnatomySelector(alertDialogAnatomy))(
    'should render %s',
    (selector) => {
      render(AlertDialog);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(AlertDialog);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
