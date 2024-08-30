<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadItemDeleteTriggerProps
    extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    fileUploadContext,
    fileUploadItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemDeleteTriggerProps =
    $props();

  let fileUpload = fileUploadContext.get();
  let itemProps = fileUploadItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getItemDeleteTriggerProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
