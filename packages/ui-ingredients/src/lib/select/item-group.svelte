<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/select';

  export interface SelectItemGroupProps
    extends Assign<HtmlIngredientProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    setSelectItemGroupContext,
    useSelectContext,
  } from './context.svelte.js';

  let {id, children, ...props}: SelectItemGroupProps = $props();

  let context = useSelectContext();

  let uid = uuid();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps({id: id ?? uid})),
  );

  setSelectItemGroupContext({id: id ?? uid});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
