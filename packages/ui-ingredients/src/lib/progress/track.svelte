<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressTrackProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressTrackProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
