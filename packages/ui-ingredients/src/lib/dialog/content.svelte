<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DialogContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogContentProps = $props();

  let dialog = dialogContext.get();

  let mergedProps = $derived(mergeProps(props, dialog.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
