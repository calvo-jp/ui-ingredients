<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface QRCodeFrameProps extends HtmlProps<'svg'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'svg'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodeFrameProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getFrameProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <svg {...attrs}>
    {@render children?.()}
  </svg>
{/if}
