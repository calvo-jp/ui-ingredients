<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadItemDeleteTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {children, ...props}: FileUploadItemDeleteTriggerProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemDeleteTriggerProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
