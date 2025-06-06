<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getListboxContext,
    getListboxItemPropsContext,
  } from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxItemTextProps = $props();

  let listbox = getListboxContext();
  let itemProps = getListboxItemPropsContext();
  let mergedProps = $derived(
    mergeProps(listbox.getItemTextProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
