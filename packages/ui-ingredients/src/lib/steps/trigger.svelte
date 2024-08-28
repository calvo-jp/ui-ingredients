<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface StepsTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsTriggerProps = $props();

  let steps = stepsContext.get();
  let itemProps = stepsItemPropsContext.get();

  let attrs = $derived(mergeProps(props, steps.getTriggerProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
