<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {uid} from 'uid';
  import {
    getComboboxContext,
    setComboboxItemGroupPropsContext,
  } from './combobox-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxItemGroupProps = $props();

  let combobox = getComboboxContext();

  let id_ = uid();

  let comboboxItemGroupProps = $derived({
    id: id ?? id_,
  });

  let mergedProps = $derived(
    mergeProps(props, combobox.getItemGroupProps(comboboxItemGroupProps)),
  );

  setComboboxItemGroupPropsContext(() => comboboxItemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
