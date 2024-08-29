<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface StepsListProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsListProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getListProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
