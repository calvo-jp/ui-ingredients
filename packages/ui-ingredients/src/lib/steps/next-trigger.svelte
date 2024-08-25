<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsNextTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsNextTriggerProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
