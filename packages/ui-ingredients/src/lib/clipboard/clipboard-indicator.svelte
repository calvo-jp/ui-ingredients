<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  interface IndicatorState {
    copied: boolean;
  }

  export interface ClipboardIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement, IndicatorState> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardIndicatorProps = $props();

  let clipboard = getClipboardContext();
  let indicatorState: IndicatorState = $derived({copied: clipboard.copied});
  let mergedProps = $derived(
    mergeProps(clipboard.getIndicatorProps(indicatorState), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, indicatorState)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.(indicatorState)}
  </span>
{/if}
