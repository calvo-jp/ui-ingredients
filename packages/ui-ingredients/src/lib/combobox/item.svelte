<script lang="ts" context="module">
  import type {Assign, WithoutChildren} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/combobox';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemProps
    extends Assign<WithoutChildren<SvelteHTMLElements['div']>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setComboboxItemContext, useComboboxContext} from './context.svelte.js';

  let {children, item, persistFocus, ...props}: ComboboxItemProps = $props();

  let context = useComboboxContext();

  let state = $derived(
    context.getItemState({
      item,
      persistFocus,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        item,
        persistFocus,
      }),
    ),
  );

  setComboboxItemContext({
    item,
    persistFocus,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
