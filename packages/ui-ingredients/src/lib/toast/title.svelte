<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ToastTitleProps extends HtmlProps<'h2'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastTitleProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <h2 {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {context.title}
    {/if}
  </h2>
{/if}
