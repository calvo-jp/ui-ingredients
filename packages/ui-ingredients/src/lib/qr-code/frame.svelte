<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface QRCodeFrameProps extends HTMLProps<'svg'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodeFrameProps = $props();

  let qrCode = qrCodeContext.get();

  let mergedProps = $derived(mergeProps(props, qrCode.getFrameProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
