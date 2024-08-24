<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ToastTitleProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toastContext} from './context.svelte.js';

  let {children, ...props}: ToastTitleProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.title}
  {/if}
</div>
