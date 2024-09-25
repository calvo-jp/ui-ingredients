<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRadioGroupContext} from './radio-group-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: RadioGroupIndicatorProps = $props();

  let radioGroup = getRadioGroupContext();

  let mergedProps = $derived(mergeProps(props, radioGroup.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
