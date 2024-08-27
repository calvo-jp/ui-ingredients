<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadDropzoneProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext} from './context.svelte.js';

  let {children, ...props}: FileUploadDropzoneProps = $props();

  let fileUpload = fileUploadContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getDropzoneProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
