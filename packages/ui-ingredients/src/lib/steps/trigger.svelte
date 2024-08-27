<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {children, ...props}: StepsTriggerProps = $props();

  let steps = stepsContext.get();
  let itemProps = stepsItemPropsContext.get();

  let attrs = $derived(mergeProps(props, steps.getTriggerProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
