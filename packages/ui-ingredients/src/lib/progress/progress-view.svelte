<script lang="ts" module>
  import type {ViewProps} from '@zag-js/progress';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ProgressViewProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ViewProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    state,
    asChild,
    children,
    ...props
  }: ProgressViewProps = $props();

  let progress = getProgressContext();

  let mergedProps = $derived(mergeProps(progress.getViewProps({state}), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
