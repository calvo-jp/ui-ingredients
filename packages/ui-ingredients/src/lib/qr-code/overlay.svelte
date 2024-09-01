<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface QrCodeOverlayProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QrCodeOverlayProps = $props();

  let qrCode = qrCodeContext.get();

  let mergedProps = $derived(mergeProps(props, qrCode.getOverlayProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
