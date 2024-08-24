<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ToastDescriptionProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toastContext} from './context.svelte.js';

  let {children, ...props}: ToastDescriptionProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.description}
  {/if}
</div>
