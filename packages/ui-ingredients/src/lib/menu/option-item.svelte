<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
  import type {Snippet} from 'svelte';

  export interface MenuOptionItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, OptionItemProps> {
    asChild?: AsChild<OptionItemState>;
    children?: Snippet<[OptionItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemProps = $props();

  let menu = menuContext.get();

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

  menuOptionItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
