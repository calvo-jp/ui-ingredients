<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface FileUploadItemSizeTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {fileUploadContext, fileUploadItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemSizeTextProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getItemSizeTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {fileUpload.getFileSize(itemProps.file)}
    {/if}
  </div>
{/if}
