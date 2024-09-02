<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getComboboxContext,
    getComboboxItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemIndicatorProps = $props();

  let combobox = getComboboxContext();
  let itemProps = getComboboxItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
