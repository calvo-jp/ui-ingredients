<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {HiddenInputProps} from '@zag-js/signature-pad';

  export interface SignaturePadHiddenInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      HiddenInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSignaturePadContext} from './context.svelte.js';

  let {
    this: e,
    value,
    asChild,
    ...props
  }: SignaturePadHiddenInputProps = $props();

  let signaturePad = getSignaturePadContext();

  let mergedProps = $derived(
    mergeProps(props, signaturePad.getHiddenInputProps({value})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
