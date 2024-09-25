<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QrCodePatternProps
    extends HtmlIngredientProps<'path', SVGPathElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getQrCodeContext} from './qr-code-context.svelte.js';

  let {this: e, asChild, children, ...props}: QrCodePatternProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(props, qrCode.getPatternProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <path bind:this={e} {...mergedProps}>
    {@render children?.()}
  </path>
{/if}
