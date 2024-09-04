<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './context.svelte.js';

  let {asChild, ...props}: ComboboxInputProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(mergeProps(props, combobox.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
