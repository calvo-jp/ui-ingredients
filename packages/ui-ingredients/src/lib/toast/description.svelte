<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ToastDescriptionProps extends HtmlProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastDescriptionProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <p {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {context.description}
    {/if}
  </p>
{/if}
