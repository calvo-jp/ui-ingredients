<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ToastCloseTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastCloseTriggerProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
