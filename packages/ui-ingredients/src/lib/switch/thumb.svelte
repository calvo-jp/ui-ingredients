<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SwitchThumbProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchThumbProps = $props();

  let switch$ = switchContext.get();

  let mergedProps = $derived(mergeProps(props, switch$.getThumbProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
