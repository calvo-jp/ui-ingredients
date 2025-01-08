<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createQRCode} from './create-qr-code.svelte.js';
  import {setQrCodeContext} from './qr-code-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: QrCodeProps = $props();

  let [createQrCodeProps, localProps] = $derived(
    createSplitProps<CreateQrCodeProps>([
      'encoding',
      'id',
      'ids',
      'onValueChange',
      'value',
    ])(props),
  );

  let qrCode = createQRCode(reflect(() => createQrCodeProps));

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
