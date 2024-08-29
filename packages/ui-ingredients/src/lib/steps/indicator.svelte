<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface StepsIndicatorProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsIndicatorProps = $props();

  let steps = stepsContext.get();
  let itemProps = stepsItemPropsContext.get();

  let attrs = $derived(mergeProps(props, steps.getIndicatorProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
