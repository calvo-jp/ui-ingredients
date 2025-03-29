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
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
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

  let [itemProps, localProps] = $derived(
    createSplitProps<OptionItemProps>([
      'checked',
      'closeOnSelect',
      'disabled',
      'onCheckedChange',
      'type',
      'value',
      'valueText',
    ])(props),
  );

  let menu = getMenuContext();

  let mergedProps = $derived(
    mergeProps(menu?.getOptionItemProps(itemProps) ?? {}, localProps),
  );

  let itemState: OptionItemState = $derived(
    menu?.getOptionItemState(itemProps) ?? {
      id: '',
      checked: false,
      disabled: false,
      highlighted: false,
    },
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
