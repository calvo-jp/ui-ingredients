<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getComboboxContext,
    getComboboxItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemTextProps = $props();

  let combobox = getComboboxContext();
  let itemProps = getComboboxItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {combobox.collection.stringifyItem(itemProps.item)}
    {/if}
  </span>
{/if}
