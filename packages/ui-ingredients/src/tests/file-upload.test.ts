import {fileUploadAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import FileUpload from './file-upload.svelte';
import {getAnatomySelector} from './utils.js';

describe('FileUpload', () => {
  it.each(getAnatomySelector(fileUploadAnatomy))(
    'should render %s',
    (selector) => {
      render(FileUpload);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(FileUpload);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
