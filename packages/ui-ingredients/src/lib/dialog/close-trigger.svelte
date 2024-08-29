<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DialogCloseTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogCloseTriggerProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getCloseTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
