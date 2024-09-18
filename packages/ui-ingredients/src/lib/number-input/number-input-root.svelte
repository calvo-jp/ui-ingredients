<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateNumberInputReturn>,
      CreateNumberInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createNumberInput} from './create-number-input.svelte.js';
  import {setNumberInputContext} from './number-input-context.svelte.js';

  let {this: e, asChild, children, ...props}: NumberInputProps = $props();

  let [createNumberInputProps, localProps] = $derived(
    createSplitProps<CreateNumberInputProps>([
      'id',
      'ids',
      'max',
      'min',
      'step',
      'name',
      'form',
      'value',
      'locale',
      'pattern',
      'invalid',
      'disabled',
      'readOnly',
      'required',
      'inputMode',
      'spinOnPress',
      'translations',
      'formatOptions',
      'allowOverflow',
      'allowMouseWheel',
      'clampValueOnBlur',
      'focusInputOnChange',
      'onFocusChange',
      'onValueChange',
      'onValueInvalid',
    ])(props),
  );

  let numberInput = createNumberInput(reflect(() => createNumberInputProps));

  let mergedProps = $derived(
    mergeProps(localProps, numberInput.getRootProps()),
  );

  setNumberInputContext(numberInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, numberInput)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(numberInput)}
  </div>
{/if}
