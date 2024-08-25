<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';
  import type {Snippet} from 'svelte';

  export interface ToggleGroupItemProps
    extends Assign<Omit<HtmlProps<'button'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toggleGroupContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: ToggleGroupItemProps = $props();

  let toggleGroup = toggleGroupContext.get();
  let itemProps = $derived({
    value,
    disabled,
  });

  let state = $derived(toggleGroup.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, toggleGroup.getItemProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.(state)}
</button>
