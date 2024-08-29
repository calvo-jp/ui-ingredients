<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateQRCodeProps, CreateQRCodeReturn} from './create-qr-code.svelte.js';

  export interface QRCodeProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateQRCodeProps> {
    asChild?: AsChild<GenericHtmlProps, CreateQRCodeReturn>;
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
    asChild,
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

{#if asChild}
  {@render asChild(attrs, qrCode)}
{:else}
  <div {...attrs}>
    {@render children?.(qrCode)}
  </div>
{/if}
