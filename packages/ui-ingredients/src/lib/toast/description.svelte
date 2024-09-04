<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastDescriptionProps extends HtmlIngredientProps<'p'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastDescriptionProps = $props();

  let context = getToastContext();

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
