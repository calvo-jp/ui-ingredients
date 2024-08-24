<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {children, ...props}: StepsTriggerProps = $props();

  let context = stepsContext.get();

  let itemProps = stepsItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getTriggerProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
