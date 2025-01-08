<script lang="ts" module>
  import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface MenuOptionItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, OptionItemState>,
      OptionItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getMenuContext,
    setMenuOptionItemPropsContext,
  } from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuOptionItemProps = $props();

  let menu = getMenuContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<OptionItemProps>([
      'type',
      'value',
      'checked',
      'disabled',
      'valueText',
      'closeOnSelect',
      'onCheckedChange',
    ])(props),
  );

  let itemState = $derived(menu!.getOptionItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(menu!.getOptionItemProps(itemProps), localProps),
  );

  setMenuOptionItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
