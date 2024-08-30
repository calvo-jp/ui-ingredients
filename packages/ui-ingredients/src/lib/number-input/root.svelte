<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateNumberInputProps,
    CreateNumberInputReturn,
  } from './create-number-input.svelte.js';

  export interface NumberInputProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateNumberInputProps> {
    asChild?: AsChild<CreateNumberInputReturn>;
    children?: Snippet<[CreateNumberInputReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';
  import {createNumberInput} from './create-number-input.svelte.js';

  let {asChild, children, ...props}: NumberInputProps = $props();

  let [numberInputProps, otherProps] = $derived(
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

  let numberInput = createNumberInput(numberInputProps);

  let mergedProps = $derived(
    mergeProps(otherProps, numberInput.getRootProps()),
  );

  numberInputContext.set(numberInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, numberInput)}
{:else}
  <div {...mergedProps}>
    {@render children?.(numberInput)}
  </div>
{/if}
