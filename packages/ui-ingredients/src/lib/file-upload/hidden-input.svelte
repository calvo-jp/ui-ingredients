<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface FileUploadHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext} from './context.svelte.js';

  let {...props}: FileUploadHiddenInputProps = $props();

  let fileUpload = fileUploadContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getHiddenInputProps()));
</script>

<input {...attrs} />
