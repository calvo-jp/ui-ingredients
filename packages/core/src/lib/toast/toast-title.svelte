<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './toast-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToastTitleProps = $props();

  let toast = getToastContext();
  let mergedProps = $derived(mergeProps(toast.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {toast.title}
    {/if}
  </h2>
{/if}
