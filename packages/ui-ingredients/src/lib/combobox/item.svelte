<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/combobox';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ComboboxItemProps extends Assign<SvelteHTMLElements['div'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setComboboxItemContext, useComboboxContext} from './context.svelte.js';

  let {children, item, persistFocus, ...props}: ComboboxItemProps = $props();

  let context = useComboboxContext();

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
  {@render children?.()}
</div>
