<script lang="ts" module>
  import type {HiddenInputProps} from '@zag-js/signature-pad';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SignaturePadHiddenInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      HiddenInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSignaturePadContext} from './signature-pad-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    ...props
  }: SignaturePadHiddenInputProps = $props();

  let signaturePad = getSignaturePadContext();
  let mergedProps = $derived(
    mergeProps(signaturePad.getHiddenInputProps({value}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
