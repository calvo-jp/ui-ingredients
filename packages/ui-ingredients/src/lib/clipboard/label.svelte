<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getClipboardContext} from './context.svelte.js';

  let {asChild, children, ...props}: ClipboardLabelProps = $props();

  let clipboard = getClipboardContext();

  let mergedProps = $derived(mergeProps(props, clipboard.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
