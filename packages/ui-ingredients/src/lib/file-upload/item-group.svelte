<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadItemGroupProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {fileUploadContext} from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadItemGroupProps = $props();

  let fileUpload = fileUploadContext.get();

  let mergedProps = $derived(mergeProps(props, fileUpload.getItemGroupProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
