<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateFileUploadProps, CreateFileUploadReturn} from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateFileUploadProps> {
    asChild?: AsChild<GenericHtmlProps, CreateFileUploadReturn>;
    children?: Snippet<[fileUpload: CreateFileUploadReturn]>;
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

  let attrs = $derived(mergeProps(props, fileUpload.getRootProps()));

  fileUploadContext.set(fileUpload);
</script>

{#if asChild}
  {@render asChild(attrs, fileUpload)}
{:else}
  <div {...attrs}>
    {@render children?.(fileUpload)}
  </div>
{/if}
