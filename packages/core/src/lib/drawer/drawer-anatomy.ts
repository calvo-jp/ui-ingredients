import {anatomy as _} from '@zag-js/dialog';

export const anatomy = _.rename('drawer').extendWith(
  'body',
  'footer',
  'header',
);

export const parts = anatomy.build();
