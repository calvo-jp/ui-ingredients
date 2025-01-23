<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface RadioGroupIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getRadioGroupContext} from './radio-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RadioGroupIndicatorProps = $props();

  let radioGroup = getRadioGroupContext();
  let mergedProps = $derived(mergeProps(radioGroup.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
