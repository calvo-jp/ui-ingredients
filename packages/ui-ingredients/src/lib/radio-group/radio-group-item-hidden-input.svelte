<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
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
    ...props
  }: RadioGroupItemHiddenInputProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemHiddenInputProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
