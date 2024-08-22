<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte';
  import { useStepsContext, useStepsItemContext } from './context.svelte.js';
js';

  let {children, ...props}: StepsTriggerProps = $props();

  let context = useStepsContext();
  let itemContext = useStepsItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps(itemContext)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
