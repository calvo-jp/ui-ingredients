<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface CheckboxIndicatorProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getCheckboxContext} from './checkbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CheckboxIndicatorProps = $props();

  let checkbox = getCheckboxContext();
  let mergedProps = $derived(mergeProps(checkbox.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
