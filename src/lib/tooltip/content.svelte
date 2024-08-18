<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TooltipContentProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipContentProps = $props();

  let context = useTooltipContext();

  let attrs = $derived(mergeProps(props, context.api.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
