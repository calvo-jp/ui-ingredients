<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
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

  let switch_ = createSwitch(reflect(() => createSwitchProps));

  let mergedProps = $derived(mergeProps(localProps, switch_.getRootProps()));

  setSwitchContext(switch_);
</script>

{#if asChild}
  {@render asChild(mergedProps, switch_)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.(switch_)}
  </label>
{/if}
