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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toggleGroupContext} from './context.svelte.js';

  let {value, disabled, asChild, children, ...props}: ToggleGroupItemProps = $props();

  let toggleGroup = toggleGroupContext.get();
  let itemProps = $derived({
    value,
    disabled,
  });

  let state = $derived(toggleGroup.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, toggleGroup.getItemProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.(state)}
  </button>
{/if}
