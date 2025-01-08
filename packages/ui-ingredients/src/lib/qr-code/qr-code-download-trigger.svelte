<script lang="ts" module>
  import type {DownloadTriggerProps} from '@zag-js/qr-code';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface QrCodeDownloadTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      DownloadTriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '@zag-js/svelte';
  import {getQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodeDownloadTriggerProps = $props();

  let [downloadTriggerProps, localProps] = $derived(
    createSplitProps<DownloadTriggerProps>(['fileName', 'mimeType', 'quality'])(
      props,
    ),
  );

  let qrCode = getQrCodeContext();
  let mergedProps = $derived(
    mergeProps(
      qrCode.getDownloadTriggerProps(downloadTriggerProps),
      localProps,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
