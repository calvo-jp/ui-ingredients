<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateFileUploadProps,
    CreateFileUploadReturn,
  } from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateFileUploadReturn>,
      CreateFileUploadProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createFileUpload} from './create-file-upload.svelte.js';
  import {setFileUploadContext} from './file-upload-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadProps = $props();

  let [createFileUploadProps, localProps] = $derived(
    createSplitProps<CreateFileUploadProps>([
      'accept',
      'allowDrop',
      'capture',
      'directory',
      'disabled',
      'id',
      'ids',
      'invalid',
      'locale',
      'maxFileSize',
      'maxFiles',
      'minFileSize',
      'minFileSize',
      'name',
      'onFileAccept',
      'onFileChange',
      'onFileReject',
      'preventDocumentDrop',
      'required',
      'translations',
      'validate',
    ])(props),
  );

  let fileUpload = createFileUpload(reflect(() => createFileUploadProps));

  let mergedProps = $derived(mergeProps(fileUpload.getRootProps(), localProps));

  setFileUploadContext(fileUpload);
</script>

{#if asChild}
  {@render asChild(mergedProps, fileUpload)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(fileUpload)}
  </div>
{/if}
