<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastDescriptionProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastDescriptionProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.description}
  {/if}
</div>
