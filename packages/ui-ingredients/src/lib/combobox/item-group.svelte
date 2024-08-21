<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/combobox';

  export interface ComboboxItemGroupProps
    extends Assign<HtmlIngredientsProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    setComboboxItemGroupContext,
    useComboboxContext,
  } from './context.svelte.js';

  let {id, children, ...props}: ComboboxItemGroupProps = $props();

  let context = useComboboxContext();

  let uid = uuid();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps({id: id ?? uid})),
  );

  setComboboxItemGroupContext({id: id ?? uid});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
