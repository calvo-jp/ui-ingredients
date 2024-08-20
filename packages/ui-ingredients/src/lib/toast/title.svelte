<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface ToastTitleProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastTitleProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.title}
  {/if}
</div>
