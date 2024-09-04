<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxLabelProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(mergeProps(props, combobox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
