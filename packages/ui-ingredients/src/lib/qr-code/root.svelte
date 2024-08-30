<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateQRCodeProps,
    CreateQRCodeReturn,
  } from './create-qr-code.svelte.js';

  export interface QRCodeProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateQRCodeProps> {
    asChild?: AsChild<CreateQRCodeReturn>;
    children?: Snippet<[CreateQRCodeReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {qrCodeContext} from './context.svelte.js';
  import {createQRCode} from './create-qr-code.svelte.js';

  let {asChild, children, ...props}: QRCodeProps = $props();

  let [qrCodeProps, otherProps] = $derived(
    createSplitProps<CreateQRCodeProps>(['id', 'ids', 'value', 'encoding'])(
      props,
    ),
  );

  let qrCode = createQRCode(reflect(() => qrCodeProps));

  let mergedProps = $derived(mergeProps(otherProps, qrCode.getRootProps()));

  qrCodeContext.set(qrCode);
</script>

{#if asChild}
  {@render asChild(mergedProps, qrCode)}
{:else}
  <div {...mergedProps}>
    {@render children?.(qrCode)}
  </div>
{/if}
