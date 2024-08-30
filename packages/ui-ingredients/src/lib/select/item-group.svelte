<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectItemGroupProps extends HTMLProps<'div'> {
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

  let mergedProps = $derived(mergeProps(props, select.getItemGroupProps(itemGroupProps)));

  selectItemGroupPropsContext.set(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
