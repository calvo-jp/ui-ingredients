<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateSwitchProps,
    CreateSwitchReturn,
  } from './create-switch.svelte.js';

  export interface SwitchProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, CreateSwitchReturn>,
      CreateSwitchProps
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSwitch} from './create-switch.svelte.js';
  import {setSwitchContext} from './switch-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SwitchProps = $props();

  let [createSwitchProps, localProps] = $derived(
    createSplitProps<CreateSwitchProps>([
      'checked',
      'defaultChecked',
      'disabled',
      'form',
      'id',
      'ids',
      'invalid',
      'label',
      'name',
      'onCheckedChange',
      'readOnly',
      'required',
      'value',
    ])(props),
  );

  let switch_ = createSwitch(reflect(() => createSwitchProps));
  let mergedProps = $derived(mergeProps(switch_.getRootProps(), localProps));

  setSwitchContext(switch_);
</script>

{#if asChild}
  {@render asChild(mergedProps, switch_)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.(switch_)}
  </label>
{/if}
