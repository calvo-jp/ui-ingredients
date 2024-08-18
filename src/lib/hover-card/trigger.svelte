<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface HoverCardTriggerProps extends Assign<SvelteHTMLElements['a'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardTriggerProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<a {...attrs}>
  {@render children?.()}
</a>
