<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface QRCodePatternProps extends HTMLProps<'path'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodePatternProps = $props();

  let qrCode = qrCodeContext.get();

  let mergedProps = $derived(mergeProps(props, qrCode.getPatternProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
