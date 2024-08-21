<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsProgressProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext} from './context.svelte.js';

  let {children, ...props}: StepsProgressProps = $props();

  let context = useStepsContext();

  let attrs = $derived(mergeProps(props, context.getProgressProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
