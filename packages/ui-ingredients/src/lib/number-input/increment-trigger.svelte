<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputIncrementTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getNumberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputIncrementTriggerProps =
    $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(
    mergeProps(props, numberInput.getIncrementTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
