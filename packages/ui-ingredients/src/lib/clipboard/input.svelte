<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ClipboardInputProps extends HtmlProps<'input'> {
    asChild?: AsChild<HtmlProps<'input'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {asChild, ...props}: ClipboardInputProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
