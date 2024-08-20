<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface ProgressCircleProps extends SvelteHtmlProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.getCircleProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
