<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsIndicatorProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemPropsContext} from './context.svelte.js';

  let {children, ...props}: StepsIndicatorProps = $props();

  let context = useStepsContext();

  let itemProps = useStepsItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
