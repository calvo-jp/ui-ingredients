<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: ComboboxInputProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(mergeProps(combobox.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
