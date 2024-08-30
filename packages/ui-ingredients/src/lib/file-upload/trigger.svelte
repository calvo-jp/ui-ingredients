<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FileUploadTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {fileUploadContext} from './context.svelte.js';

  let {asChild, children, ...props}: FileUploadTriggerProps = $props();

  let fileUpload = fileUploadContext.get();

  let mergedProps = $derived(mergeProps(props, fileUpload.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
