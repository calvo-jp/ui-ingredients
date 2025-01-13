import {createAnatomy} from 'ui-ingredients';

export const anatomy = createAnatomy('Table').parts(
  'root',
  'header',
  'body',
  'footer',
  'row',
  'cell',
  'heading',
);

export const parts = anatomy.build();
