<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsPrevTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsPrevTriggerProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
