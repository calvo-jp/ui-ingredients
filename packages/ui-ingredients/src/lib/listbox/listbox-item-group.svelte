<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getListboxContext,
    setListboxItemGroupPropsContext,
  } from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    id,
    asChild,
    children,
    ...props
  }: ListboxItemGroupProps = $props();

  let uid = $props.id();
  let itemGroupProps = $derived({id: id ?? uid});
  let listbox = getListboxContext();
  let mergedProps = $derived(
    mergeProps(listbox.getItemGroupProps(itemGroupProps), props),
  );

  setListboxItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
