<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSwitchProps,
    CreateSwitchReturn,
  } from './create-switch.svelte.js';

  export interface SwitchProps
    extends Assign<
      HtmlIngredientProps<'label', CreateSwitchReturn>,
      CreateSwitchProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSwitchContext} from './context.svelte.js';
  import {createSwitch} from './create-switch.svelte.js';

  let {asChild, children, ...props}: SwitchProps = $props();

  let [switchProps, otherProps] = $derived(
    createSplitProps<CreateSwitchProps>([
      'id',
      'ids',
      'form',
      'name',
      'label',
      'value',
      'checked',
      'invalid',
      'disabled',
      'readOnly',
      'required',
      'onCheckedChange',
    ])(props),
  );

  let switch$ = createSwitch(reflect(() => switchProps));

  let mergedProps = $derived(mergeProps(otherProps, switch$.getRootProps()));

  setSwitchContext(switch$);
</script>

{#if asChild}
  {@render asChild(mergedProps, switch$)}
{:else}
  <label {...mergedProps}>
    {@render children?.(switch$)}
  </label>
{/if}
