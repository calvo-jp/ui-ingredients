<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {fileUploadContext} from './context.svelte.js';

  let {...props}: FileUploadHiddenInputProps = $props();

  let fileUpload = fileUploadContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getHiddenInputProps()));
</script>

<input {...attrs} />
