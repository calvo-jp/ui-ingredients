<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/select';

  export interface SelectItemGroupProps
    extends Assign<HTMLProps<'div'>, Omit<ItemGroupProps, 'id'>> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemGroupPropsContext} from './context.svelte.js';

  let {id, asChild, children, ...props}: SelectItemGroupProps = $props();

  let select = selectContext.get();

  let uid = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, select.getItemGroupProps(itemGroupProps)));

  selectItemGroupPropsContext.set(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
