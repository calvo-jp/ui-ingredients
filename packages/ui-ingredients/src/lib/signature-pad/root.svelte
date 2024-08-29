<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSignaturePadProps,
    CreateSignaturePadReturn,
  } from './create-signature-pad.svelte.js';

  export interface SignaturePadProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSignaturePadProps> {
    asChild?: AsChild<GenericHtmlProps, CreateSignaturePadReturn>;
    children?: Snippet<[signaturePad: CreateSignaturePadReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';
  import {createSignaturePad} from './create-signature-pad.svelte.js';

  let {
    id,
    ids,
    name,
    drawing,
    required,
    disabled,
    readOnly,
    translations,
    onDraw,
    onDrawEnd,
    asChild,
    children,
    ...props
  }: SignaturePadProps = $props();

  let signaturePad = createSignaturePad({
    id,
    ids,
    name,
    drawing,
    required,
    disabled,
    readOnly,
    translations,
    onDraw,
    onDrawEnd,
  });

  let attrs = $derived(mergeProps(props, signaturePad.getRootProps()));

  signaturePadContext.set(signaturePad);
</script>

{#if asChild}
  {@render asChild(attrs, signaturePad)}
{:else}
  <div {...attrs}>
    {@render children?.(signaturePad)}
  </div>
{/if}
