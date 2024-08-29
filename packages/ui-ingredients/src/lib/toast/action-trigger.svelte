<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ToastActionTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastActionTriggerProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getActionTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
