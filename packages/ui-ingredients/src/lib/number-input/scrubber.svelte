<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputScrubberProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getNumberInputContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: NumberInputScrubberProps = $props();

  let numberInput = getNumberInputContext();

  let mergedProps = $derived(mergeProps(props, numberInput.getScrubberProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
