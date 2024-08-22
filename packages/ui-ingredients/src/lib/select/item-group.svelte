<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/select';

  export interface SelectItemGroupProps
    extends Assign<HtmlIngredientProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    setSelectItemGroupPropsContext,
    useSelectContext,
  } from './context.svelte.js';

  let {id, children, ...props}: SelectItemGroupProps = $props();

  let context = useSelectContext();

  let uid = createUniqueId();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps({id: id ?? uid})),
  );

  setSelectItemGroupPropsContext({id: id ?? uid});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
