<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateSignaturePadProps,
    CreateSignaturePadReturn,
  } from './create-signature-pad.svelte.js';

  export interface SignaturePadProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSignaturePadReturn>,
      Optional<CreateSignaturePadProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSignaturePad} from './create-signature-pad.svelte.js';
  import {setSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SignaturePadProps = $props();

  let uid = $props.id();

  let [createSignaturePadProps, localProps] = $derived(
    createSplitProps<Omit<CreateSignaturePadProps, 'id'>>([
      'disabled',
      'drawing',
      'ids',
      'name',
      'onDraw',
      'onDrawEnd',
      'readOnly',
      'required',
      'translations',
    ])(props),
  );

  let signaturePad = createSignaturePad(
    reflect(() => ({...createSignaturePadProps, id: id ?? uid})),
  );

  let mergedProps = $derived(
    mergeProps(signaturePad.getRootProps(), localProps),
  );

  setSignaturePadContext(signaturePad);
</script>

{#if asChild}
  {@render asChild(mergedProps, signaturePad)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(signaturePad)}
  </div>
{/if}
