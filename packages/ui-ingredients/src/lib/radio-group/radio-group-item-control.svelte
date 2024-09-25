<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getRadioGroupContext,
    getRadioGroupItemPropsContext,
  } from './radio-group-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: RadioGroupItemControlProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemControlProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
