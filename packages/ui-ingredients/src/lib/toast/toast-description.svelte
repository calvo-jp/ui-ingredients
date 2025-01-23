<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ToastDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getToastContext} from './toast-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToastDescriptionProps = $props();

  let toast = getToastContext();
  let mergedProps = $derived(mergeProps(toast.getDescriptionProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {toast.description}
    {/if}
  </p>
{/if}
