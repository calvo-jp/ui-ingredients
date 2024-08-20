<script lang="ts" context="module">
  import type {Assign, WithoutChildren} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ToggleGroupItemProps
    extends Assign<WithoutChildren<SvelteHTMLElements['button']>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useToggleGroupContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: ToggleGroupItemProps = $props();

  let context = useToggleGroupContext();

  let state = $derived(context.getItemState({value}));

  let attrs = $derived(mergeProps(props, context.getItemProps({value, disabled})));
</script>

<button type="button" {...attrs}>
  {@render children?.(state)}
</button>
