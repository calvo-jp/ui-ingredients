<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';
  import type {Snippet} from 'svelte';

  export interface ToggleGroupItemProps
    extends Assign<Omit<HTMLProps<'button'>, 'children'>, ItemProps> {
    asChild?: AsChild;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {toggleGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToggleGroupItemProps = $props();

  let toggleGroup = toggleGroupContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(toggleGroup.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, toggleGroup.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.(itemState)}
  </button>
{/if}
