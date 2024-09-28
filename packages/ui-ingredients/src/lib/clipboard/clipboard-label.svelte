<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardLabelProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(mergeProps(clipboard.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
