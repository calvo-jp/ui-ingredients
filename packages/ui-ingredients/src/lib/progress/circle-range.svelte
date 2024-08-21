<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface ProgressCircleRangeProps
    extends HtmlIngredientsProps<'circle'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleRangeProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getCircleRangeProps()));
</script>

<circle {...attrs}>
  {@render children?.()}
</circle>
