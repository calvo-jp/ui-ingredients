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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
    asChild,
    children,
    ...props
  }: MenuOptionItemProps = $props();

  let menu = menuContext.get();
  let itemProps: OptionItemProps = $derived({
    type,
    value,
    checked,
    disabled,
    valueText,
    closeOnSelect,
    onCheckedChange,
  });

  let itemState = $derived(menu.getOptionItemState(itemProps));
  let mergedProps = $derived(mergeProps(props, menu.getOptionItemProps(itemProps)));

  menuOptionItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
