<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateQRCodeProps, CreateQRCodeReturn} from './create-qr-code.svelte.js';

  export interface QRCodeProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateQRCodeProps> {
    children?: Snippet<[api: CreateQRCodeReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

  let context = createQRCode({
    id,
    ids,
    value: $state.snapshot(value),
    encoding,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  qrCodeContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
