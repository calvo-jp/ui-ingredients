import {createAnatomy} from '@zag-js/anatomy';

/**
 * @deprecated
 */
export const anatomy = createAnatomy('breadcrumbs').parts(
  'root',
  'list',
  'item',
  'link',
  'separator',
);

export const parts = anatomy.build();
