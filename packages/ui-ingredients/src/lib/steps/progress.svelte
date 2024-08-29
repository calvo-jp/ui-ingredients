<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface StepsProgressProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsProgressProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getProgressProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
