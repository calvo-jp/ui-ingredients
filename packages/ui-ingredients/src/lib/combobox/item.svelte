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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {item, persistFocus, asChild, children, ...props}: ComboboxItemProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = $derived({
    item,
    persistFocus,
  });

  let state = $derived(combobox.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, combobox.getItemProps(itemProps)));

  comboboxItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
