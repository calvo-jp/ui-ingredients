<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateNumberInputReturn>,
      Optional<CreateNumberInputProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createNumberInput} from './create-number-input.svelte.js';
  import {setNumberInputContext} from './number-input-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: NumberInputProps = $props();

  let uid = $props.id();

  let [createNumberInputProps, localProps] = $derived(
    createSplitProps<Omit<CreateNumberInputProps, 'id'>>([
      'allowMouseWheel',
      'allowOverflow',
      'clampValueOnBlur',
      'defaultValue',
      'disabled',
      'focusInputOnChange',
      'form',
      'formatOptions',
      'ids',
      'inputMode',
      'invalid',
      'locale',
      'max',
      'min',
      'name',
      'onFocusChange',
      'onValueChange',
      'onValueInvalid',
      'pattern',
      'readOnly',
      'required',
      'spinOnPress',
      'step',
      'translations',
      'value',
    ])(props),
  );

  let numberInput = createNumberInput(
    reflect(() => ({...createNumberInputProps, id: id ?? uid})),
  );

  let mergedProps = $derived(
    mergeProps(numberInput.getRootProps(), localProps),
  );

  setNumberInputContext(numberInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, numberInput)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(numberInput)}
  </div>
{/if}
