<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface ClipboardInputProps extends IngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './context.svelte.js';

  let {asChild, ...props}: ClipboardInputProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(mergeProps(props, clipboard.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
