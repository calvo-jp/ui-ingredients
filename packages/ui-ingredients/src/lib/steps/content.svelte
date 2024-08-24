<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';

  export interface StepsContentProps extends Assign<HtmlIngredientProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsContentProps = $props();

  let context = stepsContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps({index})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
