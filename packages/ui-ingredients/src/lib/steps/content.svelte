<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';

  export interface StepsContentProps extends Assign<HtmlProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsContentProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getContentProps({index})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
