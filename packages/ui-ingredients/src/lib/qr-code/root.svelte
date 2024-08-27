<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateQRCodeProps, CreateQRCodeReturn} from './create-qr-code.svelte.js';

  export interface QRCodeProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateQRCodeProps> {
    children?: Snippet<[qrCode: CreateQRCodeReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {qrCodeContext} from './context.svelte.js';
  import {createQRCode} from './create-qr-code.svelte.js';

  let {
    /**/
    id,
    ids,
    value,
    encoding,
    children,
    ...props
  }: QRCodeProps = $props();

  let qrCode = createQRCode({
    id,
    ids,
    value: $state.snapshot(value),
    encoding,
  });

  let attrs = $derived(mergeProps(props, qrCode.getRootProps()));

  qrCodeContext.set(qrCode);
</script>

<div {...attrs}>
  {@render children?.(qrCode)}
</div>
