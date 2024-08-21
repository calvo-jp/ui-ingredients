<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps
    extends Assign<HtmlIngredientProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setTimerItemContext, useTimerContext} from './context.svelte.js';

  let {type, children, ...props}: TimerItemProps = $props();

  let context = useTimerContext();

  let attrs = $derived(mergeProps(props, context.getItemProps({type})));

  setTimerItemContext({type});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
