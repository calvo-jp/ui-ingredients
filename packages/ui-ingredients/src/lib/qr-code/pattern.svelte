<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface QRCodePatternProps extends HtmlProps<'path'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'path'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QRCodePatternProps = $props();

  let qrCode = qrCodeContext.get();

  let attrs = $derived(mergeProps(props, qrCode.getPatternProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <path {...attrs}>
    {@render children?.()}
  </path>
{/if}
