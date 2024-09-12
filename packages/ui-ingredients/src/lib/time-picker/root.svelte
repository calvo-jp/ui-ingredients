<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTimePickerProps,
    CreateTimePickerReturn,
  } from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<
        HtmlIngredientProps<'div', CreateTimePickerReturn>,
        CreateTimePickerProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTimePickerContext} from './context.svelte.js';
  import {createTimePicker} from './create-time-picker.svelte.js';

  let {asChild, children, ...props}: TimePickerProps = $props();

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
  <div {...mergedProps}>
    {@render children?.(timePicker)}
  </div>
{/if}
