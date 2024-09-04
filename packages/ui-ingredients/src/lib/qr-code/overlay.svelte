<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QrCodeOverlayProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getQrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QrCodeOverlayProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(props, qrCode.getOverlayProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
