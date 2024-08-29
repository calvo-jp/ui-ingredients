<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface DialogPositionerProps extends HTMLProps<'div'> {
    asChild?: Snippet<[attrs: Omit<HTMLProps<'div'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogPositionerProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
