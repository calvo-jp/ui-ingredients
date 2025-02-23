<script lang="ts" module>
  import type {Api} from '@zag-js/toast';
  import type {HtmlIngredientProps} from '../types.js';

  export interface ToastProps
    extends HtmlIngredientProps<'div', HTMLDivElement, Api> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getToastContext} from './toast-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToastProps = $props();

  let toast = getToastContext();
  let mergedProps = $derived(mergeProps(toast.getRootProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps, toast)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    <div {...toast.getGhostBeforeProps()}></div>
    {@render children?.(toast)}
    <div {...toast.getGhostAfterProps()}></div>
  </div>
{/if}
