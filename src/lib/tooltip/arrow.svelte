<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TooltipArrowProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipArrowProps = $props();

  let context = useTooltipContext();

  let attrs = $derived(mergeProps(props, context.api.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
