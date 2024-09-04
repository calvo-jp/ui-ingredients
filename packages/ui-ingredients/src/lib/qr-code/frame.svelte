<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QrCodeFrameProps extends HtmlIngredientProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getQrCodeContext} from './context.svelte.js';

  let {asChild, children, ...props}: QrCodeFrameProps = $props();

  let qrCode = getQrCodeContext();

  let mergedProps = $derived(mergeProps(props, qrCode.getFrameProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <svg {...mergedProps}>
    {@render children?.()}
  </svg>
{/if}
