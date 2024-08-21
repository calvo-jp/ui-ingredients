<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface StepsSeparatorProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemContext} from './context.svelte.js';

  let {children, ...props}: StepsSeparatorProps = $props();

  let context = useStepsContext();
  let itemContext = useStepsItemContext();

  let attrs = $derived(
    mergeProps(props, context.getSeparatorProps(itemContext)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
