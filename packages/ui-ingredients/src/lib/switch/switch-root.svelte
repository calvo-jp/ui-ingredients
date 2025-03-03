<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateSwitchProps,
    CreateSwitchReturn,
  } from './create-switch.svelte.js';

  export interface SwitchProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, CreateSwitchReturn>,
      Optional<CreateSwitchProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSwitch} from './create-switch.svelte.js';
  import {setSwitchContext} from './switch-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: SwitchProps = $props();

  let uid = $props.id();

  let [createSwitchProps, localProps] = $derived(
    createSplitProps<Omit<CreateSwitchProps, 'id'>>([
      'checked',
      'defaultChecked',
      'disabled',
      'form',
      'ids',
      'invalid',
      'label',
      'name',
      'onCheckedChange',
      'readOnly',
      'required',
      'value',
    ])(rest),
  );

  let switch_ = createSwitch(
    reflect(() => ({...createSwitchProps, id: id ?? uid})),
  );

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
