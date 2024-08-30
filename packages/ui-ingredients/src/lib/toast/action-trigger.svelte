<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ToastActionTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastActionTriggerProps = $props();

  let context = toastContext.get();

  let mergedProps = $derived(
    mergeProps(props, context.getActionTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
