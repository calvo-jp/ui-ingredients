<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsIndicatorProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemContext} from './context.svelte.js';

  let {children, ...props}: StepsIndicatorProps = $props();

  let context = useStepsContext();
  let itemContext = useStepsItemContext();

  let attrs = $derived(
    mergeProps(props, context.getIndicatorProps(itemContext)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
