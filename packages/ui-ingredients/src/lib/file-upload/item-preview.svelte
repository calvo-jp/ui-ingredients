<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadItemPreviewProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    fileUploadContext,
    fileUploadItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemPreviewProps = $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemPreviewProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
