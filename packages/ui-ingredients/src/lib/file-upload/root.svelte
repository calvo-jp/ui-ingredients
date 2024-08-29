<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateFileUploadProps, CreateFileUploadReturn} from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateFileUploadProps> {
    asChild?: AsChild<CreateFileUploadReturn>;
    children?: Snippet<[CreateFileUploadReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext} from './context.svelte.js';
  import {createFileUpload} from './create-file-upload.svelte.js';

  let {
    id,
    ids,
    name,
    accept,
    locale,
    capture,
    required,
    disabled,
    validate,
    allowDrop,
    directory,
    maxFiles,
    maxFileSize,
    minFileSize,
    onFileAccept,
    onFileChange,
    onFileReject,
    translations,
    asChild,
    children,
    ...props
  }: FileUploadProps = $props();

  let fileUpload = createFileUpload({
    id,
    ids,
    name,
    accept,
    locale,
    capture,
    required,
    disabled,
    validate,
    allowDrop,
    directory,
    maxFiles,
    maxFileSize,
    minFileSize,
    onFileAccept,
    onFileChange,
    onFileReject,
    translations,
  });

  let mergedProps = $derived(mergeProps(props, fileUpload.getRootProps()));

  fileUploadContext.set(fileUpload);
</script>

{#if asChild}
  {@render asChild(mergedProps, fileUpload)}
{:else}
  <div {...mergedProps}>
    {@render children?.(fileUpload)}
  </div>
{/if}
