<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';

  export interface ClipboardIndicatorProps
    extends Assign<
      HtmlIngredientProps<'span', HTMLSpanElement>,
      Partial<IndicatorProps>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    copied = false,
    asChild,
    children,
    ...props
  }: ClipboardIndicatorProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(
    mergeProps(clipboard.getIndicatorProps({copied}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
