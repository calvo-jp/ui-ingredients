<script lang="ts" module>
  import type {Snippet} from 'svelte';

  import type {HtmlProps} from '$lib/types.js';

  export interface ClipboardLabelProps extends HtmlProps<'label'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {asChild, children, ...props}: ClipboardLabelProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
