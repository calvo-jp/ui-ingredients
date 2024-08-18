<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';

  export interface ToastActionTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastActionTriggerProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getActionTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
