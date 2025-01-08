<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  interface IndicatorState {
    copied: boolean;
  }

  export interface ClipboardIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement, IndicatorState> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardIndicatorProps = $props();

  let clipboard = getClipboardContext();

  let state = $derived({
    copied: clipboard.copied,
  });

  let mergedProps = $derived(
    mergeProps(clipboard.getIndicatorProps(state), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, state)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.(state)}
  </span>
{/if}
