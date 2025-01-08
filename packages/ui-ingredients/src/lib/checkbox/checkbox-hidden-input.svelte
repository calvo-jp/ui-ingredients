<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface CheckboxHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getCheckboxContext} from './checkbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: CheckboxHiddenInputProps = $props();

  let checkbox = getCheckboxContext();
  let mergedProps = $derived(mergeProps(checkbox.getHiddenInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
