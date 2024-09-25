<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputDecrementTriggerProps
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
  }: NumberInputDecrementTriggerProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(
    mergeProps(props, numberInput.getDecrementTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
