<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/create-unique-id.js';
  import {mergeProps} from '$lib/merge-props.js';
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

  let id_ = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? id_,
  });

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
