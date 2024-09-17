<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {uid} from 'uid';
  import {
    getSelectContext,
    setSelectItemGroupPropsContext,
  } from './select-context.svelte.js';

  let {
    id,
    this: e,
    asChild,
    children,
    ...props
  }: SelectItemGroupProps = $props();

  let select = getSelectContext();

  let id_ = uid();

  let itemGroupProps = $derived({
    id: id ?? id_,
  });

  let mergedProps = $derived(
    mergeProps(props, select.getItemGroupProps(itemGroupProps)),
  );

  setSelectItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
