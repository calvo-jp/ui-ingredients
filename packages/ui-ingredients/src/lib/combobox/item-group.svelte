<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/combobox';

  export interface ComboboxItemGroupProps
    extends Assign<HtmlIngredientProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemGroupPropsContext} from './context.svelte.js';

  let {id, children, ...props}: ComboboxItemGroupProps = $props();

  let context = comboboxContext.get();

  let uid = createUniqueId();

  let comboboxItemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, context.getItemGroupProps(comboboxItemGroupProps)));

  comboboxItemGroupPropsContext.set(() => comboboxItemGroupProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
