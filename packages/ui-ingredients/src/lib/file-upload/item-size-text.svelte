<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadItemSizeTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    fileUploadContext,
    fileUploadItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemSizeTextProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemSizeTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {fileUpload.getFileSize(itemProps.file)}
    {/if}
  </span>
{/if}
