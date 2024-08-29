<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/combobox';

  export interface ComboboxItemGroupProps
    extends Assign<HTMLProps<'div'>, Omit<ItemGroupProps, 'id'>> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemGroupPropsContext} from './context.svelte.js';

  let {id, asChild, children, ...props}: ComboboxItemGroupProps = $props();

  let combobox = comboboxContext.get();

  let uid = createUniqueId();

  let comboboxItemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, combobox.getItemGroupProps(comboboxItemGroupProps)));

  comboboxItemGroupPropsContext.set(() => comboboxItemGroupProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
