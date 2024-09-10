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

  let [timePickerProps, otherProps] = $derived(
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

  let timePicker = createTimePicker(reflect(() => timePickerProps));

  let [presenceStrategyProps, elementProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      otherProps,
    ),
  );

  let presence = createPresence({
    get present() {
      return timePicker.open;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  let mergedProps = $derived(
    mergeProps(elementProps, timePicker.getRootProps()),
  );

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
