<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressCircleTrackProps
    extends HtmlIngredientProps<'circle'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleTrackProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getCircleTrackProps()));
</script>

<circle {...attrs}>
  {@render children?.()}
</circle>
