import {createAnatomy} from '@zag-js/anatomy';

export const anatomy = createAnatomy('field').parts(
  'root',
  'label',
  'input',
  'select',
  'textarea',
  'errorText',
  'helperText',
  'requiredIndicator',
);

export const parts = anatomy.build();
