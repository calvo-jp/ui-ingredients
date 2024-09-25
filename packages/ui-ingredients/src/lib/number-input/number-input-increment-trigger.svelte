<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputIncrementTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: NumberInputIncrementTriggerProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(
    mergeProps(props, numberInput.getIncrementTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
