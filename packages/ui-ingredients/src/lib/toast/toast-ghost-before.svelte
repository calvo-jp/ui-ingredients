<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ToastGhostBeforeProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getToastContext} from './toast-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToastGhostBeforeProps = $props();

  let toast = getToastContext();
  let mergedProps = $derived(mergeProps(toast.getGhostBeforeProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
