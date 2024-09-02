<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ToastCloseTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastCloseTriggerProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
