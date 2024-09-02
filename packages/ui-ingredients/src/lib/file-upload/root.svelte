<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateFileUploadProps,
    CreateFileUploadReturn,
  } from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateFileUploadProps> {
    asChild?: AsChild<CreateFileUploadReturn>;
    children?: Snippet<[CreateFileUploadReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setFileUploadContext} from './context.svelte.js';
  import {createFileUpload} from './create-file-upload.svelte.js';

  let {asChild, children, ...props}: FileUploadProps = $props();

  let [fileUploadProps, otherProps] = $derived(
    createSplitProps<CreateFileUploadProps>([
      'id',
      'ids',
      'name',
      'accept',
      'locale',
      'capture',
      'required',
      'disabled',
      'validate',
      'allowDrop',
      'directory',
      'maxFiles',
      'maxFileSize',
      'minFileSize',
      'onFileAccept',
      'onFileChange',
      'onFileReject',
      'translations',
    ])(props),
  );

  let fileUpload = createFileUpload(reflect(() => fileUploadProps));

  let mergedProps = $derived(mergeProps(otherProps, fileUpload.getRootProps()));

  setFileUploadContext(fileUpload);
</script>

{#if asChild}
  {@render asChild(mergedProps, fileUpload)}
{:else}
  <div {...mergedProps}>
    {@render children?.(fileUpload)}
  </div>
{/if}
