<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemPropsContext} from './context.svelte.js';

  let {children, ...props}: StepsTriggerProps = $props();

  let context = useStepsContext();

  let itemProps = useStepsItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
