<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  interface IndicatorState {
    copied: boolean;
  }

  export interface ClipboardIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement, IndicatorState> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
