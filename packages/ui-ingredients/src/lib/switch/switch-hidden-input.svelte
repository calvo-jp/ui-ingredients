<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SwitchHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSwitchContext} from './switch-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: SwitchHiddenInputProps = $props();

  let switch_ = getSwitchContext();
  let mergedProps = $derived(mergeProps(switch_.getHiddenInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
