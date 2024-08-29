<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ToastDescriptionProps extends HTMLProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastDescriptionProps = $props();

  let context = toastContext.get();

  let mergedProps = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {context.description}
    {/if}
  </p>
{/if}
