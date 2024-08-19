<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';

  export interface ToastProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getRootProps()));
</script>

<div {...attrs}>
  <div {...context.getGhostBeforeProps()}></div>

  {@render children?.()}

  <div {...context.getGhostAfterProps()}></div>
</div>
