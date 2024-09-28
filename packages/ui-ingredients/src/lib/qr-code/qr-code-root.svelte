<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateQrCodeProps,
    CreateQrCodeReturn,
  } from './create-qr-code.svelte.js';

  export interface QrCodeProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateQrCodeReturn>,
      CreateQrCodeProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createQRCode} from './create-qr-code.svelte.js';
  import {setQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodeProps = $props();

  let [createQrCodeProps, localProps] = $derived(
    createSplitProps<CreateQrCodeProps>(['id', 'ids', 'value', 'encoding'])(
      props,
    ),
  );

  let qrCode = createQRCode(reflect(() => createQrCodeProps));

  let mergedProps = $derived(mergeProps(localProps, qrCode.getRootProps()));

  setQrCodeContext(qrCode);
</script>

{#if asChild}
  {@render asChild(mergedProps, qrCode)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(qrCode)}
  </div>
{/if}
