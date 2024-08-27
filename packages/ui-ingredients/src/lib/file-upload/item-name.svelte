<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadItemNameProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {children, ...props}: FileUploadItemNameProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemNameProps(itemProps)));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {itemProps.file.name}
  {/if}
</div>
