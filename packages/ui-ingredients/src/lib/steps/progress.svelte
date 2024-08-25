<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsProgressProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsProgressProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(mergeProps(props, steps.getProgressProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
