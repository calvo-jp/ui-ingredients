<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateQrCodeProps,
    CreateQrCodeReturn,
  } from './create-qr-code.svelte.js';

  export interface QrCodeProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateQrCodeReturn>,
      Optional<CreateQrCodeProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createQRCode} from './create-qr-code.svelte.js';
  import {setQrCodeContext} from './qr-code-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: QrCodeProps = $props();

  let uid = $props.id();

  let [createQrCodeProps, localProps] = $derived(
    createSplitProps<Omit<CreateQrCodeProps, 'id'>>([
      'defaultValue',
      'encoding',
      'ids',
      'onValueChange',
      'pixelSize',
      'value',
    ])(rest),
  );

  let qrCode = createQRCode(
    reflect(() => ({...createQrCodeProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(qrCode.getRootProps(), localProps));

  setQrCodeContext(qrCode);
</script>

{#if asChild}
  {@render asChild(mergedProps, qrCode)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(qrCode)}
  </div>
{/if}
