<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadItemSizeTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {children, ...props}: FileUploadItemSizeTextProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemSizeTextProps(itemProps)));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {fileUpload.getFileSize(itemProps.file)}
  {/if}
</div>
