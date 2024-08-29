<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface FileUploadItemNameProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemNameProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemNameProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {itemProps.file.name}
    {/if}
  </span>
{/if}
