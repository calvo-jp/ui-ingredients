<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface StepsIndicatorProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
