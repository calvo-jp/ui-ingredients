import {Context} from '$lib/context.svelte.js';
import type {ItemProps} from '@zag-js/file-upload';
import type {CreateFileUploadReturn} from './create-file-upload.svelte.js';

export const fileUploadContext = new Context<CreateFileUploadReturn>(
  'FileUpload',
);
export const fileUploadItemPropsContext = new Context<ItemProps>(
  'FileUploadItem',
);
