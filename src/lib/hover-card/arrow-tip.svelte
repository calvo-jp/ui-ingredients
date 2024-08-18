<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface HoverCardArrowTipProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowTipProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.api.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
