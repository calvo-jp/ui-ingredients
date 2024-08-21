<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressRangeProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressRangeProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getRangeProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
