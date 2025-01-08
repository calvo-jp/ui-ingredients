<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface RadioGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getRadioGroupContext} from './radio-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RadioGroupLabelProps = $props();

  let radioGroup = getRadioGroupContext();

  let mergedProps = $derived(mergeProps(radioGroup.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
