<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsPrevTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsPrevTriggerProps = $props();

  let context = stepsContext.get();

  let attrs = $derived(mergeProps(props, context.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
