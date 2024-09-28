<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getRadioGroupContext,
    getRadioGroupItemPropsContext,
  } from './radio-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RadioGroupItemTextProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(radioGroup.getItemTextProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
