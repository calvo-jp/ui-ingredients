import {toastAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {userEvent} from '@testing-library/user-event';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Toast from './toast.svelte';

describe('Toast', () => {
  it.each(getAnatomySelector(toastAnatomy))(
    'should render %s',
    async (selector) => {
      const {getByRole} = render(Toast);

      const user = userEvent.setup();
      const trigger = getByRole('button', {name: 'Create toast'});

      await user.click(trigger);

      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container, getByRole} = render(Toast);

    const user = userEvent.setup();
    const trigger = getByRole('button', {name: 'Create toast'});

    await user.click(trigger);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
