<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ComboboxInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: ComboboxInputProps = $props();

  let combobox = getComboboxContext();
  let mergedProps = $derived(
    mergeProps({'aria-expanded': false}, combobox.getInputProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
