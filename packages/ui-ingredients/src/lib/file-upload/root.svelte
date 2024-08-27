<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateFileUploadProps, CreateFileUploadReturn} from './create-file-upload.svelte.js';

  export interface FileUploadProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateFileUploadProps> {
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

<div {...attrs}>
  {@render children?.(fileUpload)}
</div>
