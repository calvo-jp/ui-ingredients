<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './clipboard-context.svelte.js';

  let {this: e, asChild, ...props}: ClipboardInputProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(mergeProps(props, clipboard.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
