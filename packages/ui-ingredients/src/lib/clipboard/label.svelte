<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ClipboardLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {clipboardContext} from './context.svelte.js';

  let {asChild, children, ...props}: ClipboardLabelProps = $props();

  let clipboard = clipboardContext.get();

  let mergedProps = $derived(mergeProps(props, clipboard.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
