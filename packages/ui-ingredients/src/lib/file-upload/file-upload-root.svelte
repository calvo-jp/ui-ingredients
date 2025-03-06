<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateFileUploadProps,
    CreateFileUploadReturn,
  } from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateFileUploadReturn>,
      Optional<CreateFileUploadProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createFileUpload} from './create-file-upload.svelte.js';
  import {setFileUploadContext} from './file-upload-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FileUploadProps = $props();

  let uid = $props.id();

  let [createFileUploadProps, localProps] = $derived(
    createSplitProps<Omit<CreateFileUploadProps, 'id'>>([
      'accept',
      'allowDrop',
      'capture',
      'directory',
      'disabled',
      'ids',
      'invalid',
      'locale',
      'maxFileSize',
      'maxFiles',
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

  let fileUpload = createFileUpload(
    reflect(() => ({...createFileUploadProps, id: id ?? uid})),
  );

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
