<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DialogTitleProps extends HTMLProps<'h2'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogTitleProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <h2 {...attrs}>
    {@render children?.()}
  </h2>
{/if}
