<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {OptionItemProps, OptionItemState} from '@zag-js/menu';

  export interface MenuOptionItemProps
    extends Assign<
      HtmlIngredientProps<'div', OptionItemState>,
      OptionItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getMenuContext,
    setMenuOptionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemProps = $props();

  let menu = getMenuContext();

  let [itemProps, otherProps] = $derived(
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

  let itemState = $derived(menu.getOptionItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, menu.getOptionItemProps(itemProps)),
  );

  setMenuOptionItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
