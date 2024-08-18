<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface HoverCardContentProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useHoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardContentProps = $props();

  let context = useHoverCardContext();

  let attrs = $derived(mergeProps(props, context.api.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
