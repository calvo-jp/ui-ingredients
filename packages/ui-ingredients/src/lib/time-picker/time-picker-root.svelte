<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateTimePickerProps,
    CreateTimePickerReturn,
  } from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateTimePickerReturn>,
        Optional<CreateTimePickerProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createTimePicker} from './create-time-picker.svelte.js';
  import {setTimePickerContext} from './time-picker-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: TimePickerProps = $props();

  let uid = $props.id();

  let [createTimePickerProps, otherProps] = $derived(
    createSplitProps<Omit<CreateTimePickerProps, 'id'>>([
      'allowSeconds',
      'defaultOpen',
      'defaultValue',
      'disableLayer',
      'disabled',
      'ids',
      'locale',
      'max',
      'min',
      'name',
      'onFocusChange',
      'onOpenChange',
      'onValueChange',
      'open',
      'placeholder',
      'positioning',
      'readOnly',
      'steps',
      'value',
    ])(rest),
  );

  let [presenceStrategyProps, localProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      otherProps,
    ),
  );

  let timePicker = createTimePicker(
    reflect(() => ({...createTimePickerProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: timePicker.open,
    })),
  );

  let mergedProps = $derived(mergeProps(timePicker.getRootProps(), localProps));

  setTimePickerContext(timePicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, timePicker)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(timePicker)}
  </div>
{/if}
