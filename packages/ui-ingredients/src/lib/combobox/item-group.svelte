<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/combobox';

  export interface ComboboxItemGroupProps
    extends Assign<HtmlIngredientProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    setComboboxItemGroupPropsContext,
    useComboboxContext,
  } from './context.svelte.js';

  let {id, children, ...props}: ComboboxItemGroupProps = $props();

  let context = useComboboxContext();

  let uid = createUniqueId();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps({id: id ?? uid})),
  );

  setComboboxItemGroupPropsContext({id: id ?? uid});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
