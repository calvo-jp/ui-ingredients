<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';

  export interface StepsContentProps
    extends Assign<HtmlIngredientsProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsContentProps = $props();

  let context = useStepsContext();

  let attrs = $derived(mergeProps(props, context.getContentProps({index})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
