<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSignaturePadProps,
    CreateSignaturePadReturn,
  } from './create-signature-pad.svelte.js';

  export interface SignaturePadProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSignaturePadReturn>,
      CreateSignaturePadProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSignaturePadContext} from './context.svelte.js';
  import {createSignaturePad} from './create-signature-pad.svelte.js';

  let {this: e, asChild, children, ...props}: SignaturePadProps = $props();

  let [signaturePadProps, localProps] = $derived(
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

  let signaturePad = createSignaturePad(reflect(() => signaturePadProps));

  let mergedProps = $derived(
    mergeProps(localProps, signaturePad.getRootProps()),
  );

  setSignaturePadContext(signaturePad);
</script>

{#if asChild}
  {@render asChild(mergedProps, signaturePad)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(signaturePad)}
  </div>
{/if}
