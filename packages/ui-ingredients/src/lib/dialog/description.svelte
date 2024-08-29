<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DialogDescriptionProps extends HTMLProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogDescriptionProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <p {...attrs}>
    {@render children?.()}
  </p>
{/if}
