<script lang="ts" context="module">
  import type {Assign, WithoutChildren} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/steps';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface StepsItemProps
    extends Assign<WithoutChildren<SvelteHTMLElements['div']>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setStepsItemContext, useStepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsItemProps = $props();

  let context = useStepsContext();

  let state = $derived(context.getItemState({index}));

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));

  setStepsItemContext({index});
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
