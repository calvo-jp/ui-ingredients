import {render} from '@testing-library/svelte/svelte5';
import {userEvent} from '@testing-library/user-event';
import {axe} from 'vitest-axe';
import Toast from './toast.svelte';

describe('Toast', () => {
  it('should have no a11y violations', async () => {
    const {container, getByRole} = render(Toast);

    const user = userEvent.setup();
    const trigger = getByRole('button', {name: 'Create toast'});

    await user.click(trigger);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
