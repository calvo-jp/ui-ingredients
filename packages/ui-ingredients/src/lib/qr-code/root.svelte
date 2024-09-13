<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateQrCodeProps,
    CreateQrCodeReturn,
  } from './create-qr-code.svelte.js';

  export interface QrCodeProps
    extends Assign<
      HtmlIngredientProps<'div', CreateQrCodeReturn>,
      CreateQrCodeProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setQrCodeContext} from './context.svelte.js';
  import {createQRCode} from './create-qr-code.svelte.js';

  let {this: e, asChild, children, ...props}: QrCodeProps = $props();

  let [qrCodeProps, localProps] = $derived(
    createSplitProps<CreateQrCodeProps>(['id', 'ids', 'value', 'encoding'])(
      props,
    ),
  );

  let qrCode = createQRCode(reflect(() => qrCodeProps));

  let mergedProps = $derived(mergeProps(localProps, qrCode.getRootProps()));

  setQrCodeContext(qrCode);
</script>

{#if asChild}
  {@render asChild(mergedProps, qrCode)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(qrCode)}
  </div>
{/if}
