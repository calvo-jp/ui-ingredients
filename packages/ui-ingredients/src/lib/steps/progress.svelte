<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface StepsProgressProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {stepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsProgressProps = $props();

  let steps = stepsContext.get();

  let mergedProps = $derived(mergeProps(props, steps.getProgressProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
