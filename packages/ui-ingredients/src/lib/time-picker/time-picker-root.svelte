<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTimePickerProps,
    CreateTimePickerReturn,
  } from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateTimePickerReturn>,
        CreateTimePickerProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createTimePicker} from './create-time-picker.svelte.js';
  import {setTimePickerContext} from './time-picker-context.svelte.js';

  let {this: e, asChild, children, ...props}: TimePickerProps = $props();

  let [timePickerProps, rest] = $derived(
    createSplitProps<CreateTimePickerProps>([
      'id',
      'ids',
      'min',
      'max',
      'name',
      'open',
      'steps',
      'value',
      'locale',
      'readOnly',
      'disabled',
      'defaultOpen',
      'placeholder',
      'positioning',
      'allowSeconds',
      'disableLayer',
      'onOpenChange',
      'onValueChange',
      'onFocusChange',
    ])(props),
  );

  let [presenceStrategyProps, localProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let timePicker = createTimePicker(reflect(() => timePickerProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: timePicker.open,
    })),
  );

  let mergedProps = $derived(mergeProps(localProps, timePicker.getRootProps()));

  setTimePickerContext(timePicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, timePicker)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(timePicker)}
  </div>
{/if}
