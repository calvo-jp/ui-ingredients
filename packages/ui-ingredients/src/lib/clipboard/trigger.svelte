<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ClipboardTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {asChild, children, ...props}: ClipboardTriggerProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
