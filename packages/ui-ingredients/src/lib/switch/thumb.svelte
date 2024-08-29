<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SwitchThumbProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchThumbProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getThumbProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
