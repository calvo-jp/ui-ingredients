<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface DialogContentProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogContentProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
