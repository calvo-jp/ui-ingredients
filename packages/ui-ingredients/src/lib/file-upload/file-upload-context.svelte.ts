import type {ItemProps} from '@zag-js/file-upload';
import {createContext} from '../create-context.svelte.js';
import type {CreateFileUploadReturn} from './create-file-upload.svelte.js';

export const [getFileUploadContext, setFileUploadContext] =
  createContext<CreateFileUploadReturn>('FileUpload');

export const [getFileUploadItemPropsContext, setFileUploadItemPropsContext] =
  createContext<ItemProps>('FileUploadItem.props');
