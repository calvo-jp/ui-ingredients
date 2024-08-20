<script lang="ts" context="module">
  import type {WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateToastContextReturn} from './context.svelte.js';

  export interface ToastProps extends WithoutChildren<SvelteHTMLElements['div']> {
    children?: Snippet<[context: CreateToastContextReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getRootProps()));
</script>

<div {...attrs}>
  <div {...context.getGhostBeforeProps()}></div>

  {@render children?.(context)}

  <div {...context.getGhostAfterProps()}></div>
</div>
