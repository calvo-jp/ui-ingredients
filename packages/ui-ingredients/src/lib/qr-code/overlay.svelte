<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface QRCodeOverlayProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodeOverlayProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getOverlayProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
