<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ClipboardInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: ClipboardInputProps = $props();

  let clipboard = getClipboardContext();
  let mergedProps = $derived(mergeProps(clipboard.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
