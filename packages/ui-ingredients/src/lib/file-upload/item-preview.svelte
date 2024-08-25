<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadItemPreviewProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {children, ...props}: FileUploadItemPreviewProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemPreviewProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
