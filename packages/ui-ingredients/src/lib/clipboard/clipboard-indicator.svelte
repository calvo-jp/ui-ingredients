<script lang="ts" context="module">
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
    this: e,
    copied = false,
    asChild,
    children,
    ...props
  }: ClipboardIndicatorProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(
    mergeProps(props, clipboard.getIndicatorProps({copied})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
