<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelTitleProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FloatingPanelTitleProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(mergeProps(props, floatingPanel.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
