<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';
  import type {Snippet} from 'svelte';

  export interface ClipboardIndicatorProps
    extends Assign<HtmlProps<'div'>, Partial<IndicatorProps>> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';

  let {copied = false, asChild, children, ...props}: ClipboardIndicatorProps = $props();

  let clipboard = clipboardContext.get();

  let attrs = $derived(mergeProps(props, clipboard.getIndicatorProps({copied})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
