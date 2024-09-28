<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ViewProps} from '@zag-js/progress';

  export interface ProgressViewProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ViewProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    state,
    asChild,
    children,
    ...props
  }: ProgressViewProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(props, progress.getViewProps({state})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
