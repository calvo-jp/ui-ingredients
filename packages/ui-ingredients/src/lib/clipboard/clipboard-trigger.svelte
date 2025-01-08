<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ClipboardTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardTriggerProps = $props();

  let clipboard = getClipboardContext();
  let mergedProps = $derived(mergeProps(clipboard.getTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
