<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadItemNameProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    fileUploadContext,
    fileUploadItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemNameProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemNameProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {itemProps.file.name}
    {/if}
  </span>
{/if}
