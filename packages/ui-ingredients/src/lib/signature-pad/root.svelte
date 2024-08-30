<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSignaturePadProps,
    CreateSignaturePadReturn,
  } from './create-signature-pad.svelte.js';

  export interface SignaturePadProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateSignaturePadProps> {
    asChild?: AsChild<CreateSignaturePadReturn>;
    children?: Snippet<[CreateSignaturePadReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {signaturePadContext} from './context.svelte.js';
  import {createSignaturePad} from './create-signature-pad.svelte.js';

  let {asChild, children, ...props}: SignaturePadProps = $props();

  let [signaturePadProps, otherProps] = $derived(
    createSplitProps<CreateSignaturePadProps>([
      'id',
      'ids',
      'name',
      'drawing',
      'required',
      'disabled',
      'readOnly',
      'translations',
      'onDraw',
      'onDrawEnd',
    ])(props),
  );

  let signaturePad = createSignaturePad(signaturePadProps);

  let mergedProps = $derived(mergeProps(otherProps, signaturePad.getRootProps()));

  signaturePadContext.set(signaturePad);
</script>

{#if asChild}
  {@render asChild(mergedProps, signaturePad)}
{:else}
  <div {...mergedProps}>
    {@render children?.(signaturePad)}
  </div>
{/if}
