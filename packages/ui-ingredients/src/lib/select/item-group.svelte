<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/select';

  export interface SelectItemGroupProps
    extends Assign<HtmlProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemGroupPropsContext} from './context.svelte.js';

  let {id, children, ...props}: SelectItemGroupProps = $props();

  let select = selectContext.get();

  let uid = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, select.getItemGroupProps(itemGroupProps)));

  selectItemGroupPropsContext.set(() => itemGroupProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
