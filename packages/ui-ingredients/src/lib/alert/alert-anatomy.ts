import {createAnatomy} from '@zag-js/anatomy';

export const anatomy = createAnatomy('alert').parts(
  'root',
  'title',
  'description',
  'indicator',
);

export const parts = anatomy.build();
