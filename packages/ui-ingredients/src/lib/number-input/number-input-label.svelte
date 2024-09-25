<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getNumberInputContext} from './number-input-context.svelte.js';

  let {this: e, asChild, children, ...props}: NumberInputLabelProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(mergeProps(props, numberInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={e} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
