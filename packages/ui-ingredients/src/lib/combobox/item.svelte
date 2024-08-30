<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';
  import type {Snippet} from 'svelte';

  export interface ComboboxItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemProps = $props();

  let combobox = comboboxContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['item', 'persistFocus'])(props),
  );

  let itemState = $derived(combobox.getItemState(itemProps));
  let mergedProps = $derived(mergeProps(otherProps, combobox.getItemProps(itemProps)));

  comboboxItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
