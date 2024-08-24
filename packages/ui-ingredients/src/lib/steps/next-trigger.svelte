<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsNextTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsNextTriggerProps = $props();

  let context = stepsContext.get();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
