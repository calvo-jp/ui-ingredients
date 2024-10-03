import {timePickerAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import TimePicker from './time-picker.svelte';
import {getAnatomySelector} from './utils.js';

describe('TimePicker', () => {
  it.each(getAnatomySelector(timePickerAnatomy))(
    'should render %s',
    (selector) => {
      render(TimePicker);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(TimePicker);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
