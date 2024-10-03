import {datePickerAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import DatePicker from './date-picker.svelte';
import {getAnatomySelector} from './utils.js';

describe('DatePicker', () => {
  it.each(getAnatomySelector(datePickerAnatomy))(
    'should render %s',
    (selector) => {
      render(DatePicker);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(DatePicker);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
