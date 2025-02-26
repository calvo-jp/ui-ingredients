<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateColorPickerProps,
    CreateColorPickerReturn,
  } from './create-color-picker.svelte.js';

  export interface ColorPickerProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateColorPickerReturn>,
        CreateColorPickerProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {setColorPickerContext} from './color-picker-context.svelte.js';
  import {createColorPicker} from './create-color-picker.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerProps = $props();

  let [presenceProps, etc] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createColorPickerProps, localProps] = $derived(
    createSplitProps<CreateColorPickerProps>([
      'closeOnSelect',
      'defaultFormat',
      'defaultOpen',
      'defaultValue',
      'disabled',
      'format',
      'id',
      'ids',
      'initialFocusEl',
      'invalid',
      'name',
      'onFocusOutside',
      'onFormatChange',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'onValueChange',
      'onValueChangeEnd',
      'open',
      'openAutoFocus',
      'positioning',
      'readOnly',
      'required',
      'value',
    ])(etc),
  );

  let colorPicker = createColorPicker(reflect(() => createColorPickerProps));
  let presence = createPresence(
    reflect(() => ({
      present: colorPicker.open,
      ...presenceProps,
    })),
  );

  let mergedProps = $derived(
    mergeProps(colorPicker.getRootProps(), localProps),
  );

  setColorPickerContext(colorPicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, colorPicker)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(colorPicker)}
  </div>
{/if}
