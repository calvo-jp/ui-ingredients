<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext} from './context.svelte.js';

  let {children, ...props}: FileUploadTriggerProps = $props();

  let fileUpload = fileUploadContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
