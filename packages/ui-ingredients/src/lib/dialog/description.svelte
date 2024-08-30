<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DialogDescriptionProps extends HTMLProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogDescriptionProps = $props();

  let dialog = dialogContext.get();

  let mergedProps = $derived(mergeProps(props, dialog.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
