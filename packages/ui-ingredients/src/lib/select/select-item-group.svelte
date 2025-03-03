<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getSelectContext,
    setSelectItemGroupPropsContext,
  } from './select-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: SelectItemGroupProps = $props();

  let uid = $props.id();

  let select = getSelectContext();

  let itemGroupProps = $derived({id: id ?? uid});
  let mergedProps = $derived(
    mergeProps(select.getItemGroupProps(itemGroupProps), rest),
  );

  setSelectItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
