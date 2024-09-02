<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ToastTitleProps extends HTMLProps<'h2'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastTitleProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(mergeProps(props, context.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {context.title}
    {/if}
  </h2>
{/if}
