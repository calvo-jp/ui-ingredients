<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: ClipboardTriggerProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(mergeProps(props, clipboard.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
