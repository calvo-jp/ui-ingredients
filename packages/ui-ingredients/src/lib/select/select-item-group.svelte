<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {createUniqueId} from '../create-unique-id.js';
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
    ...props
  }: SelectItemGroupProps = $props();

  let select = getSelectContext();

  let uid = createUniqueId();
  let itemGroupProps = $derived({id: id ?? uid});
  let mergedProps = $derived(
    mergeProps(select.getItemGroupProps(itemGroupProps), props),
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
