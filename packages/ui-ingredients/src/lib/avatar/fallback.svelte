<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface AvatarFallbackProps extends SvelteHtmlProps<'div'> {}
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
