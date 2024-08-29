<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SwitchControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchControlProps = $props();

  let switch$ = switchContext.get();

  let mergedProps = $derived(mergeProps(props, switch$.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
