<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface HoverCardArrowProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.api.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
