<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AvatarFallbackProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAvatarContext} from './context.svelte.js';

  let {children, ...props}: AvatarFallbackProps = $props();

  let context = useAvatarContext();

  let attrs = $derived(mergeProps(props, context.getFallbackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
