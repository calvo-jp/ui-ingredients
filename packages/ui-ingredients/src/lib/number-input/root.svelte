<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<
      HtmlIngredientProps<'div', CreateNumberInputReturn>,
      CreateNumberInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setNumberInputContext} from './context.svelte.js';
  import {createNumberInput} from './create-number-input.svelte.js';

  let {asChild, children, ...props}: NumberInputProps = $props();

  let [numberInputProps, localProps] = $derived(
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

  let numberInput = createNumberInput(reflect(() => numberInputProps));

  let mergedProps = $derived(
    mergeProps(localProps, numberInput.getRootProps()),
  );

  setNumberInputContext(numberInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, numberInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(numberInput)}
  </div>
{/if}
