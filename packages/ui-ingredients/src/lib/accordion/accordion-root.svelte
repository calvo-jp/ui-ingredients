<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateAccordionProps,
    CreateAccordionReturn,
  } from './create-accordion.svelte.js';

  export interface AccordionProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateAccordionReturn>,
        CreateAccordionProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {setAccordionContext} from './accordion-context.svelte.js';
  import {createAccordion} from './create-accordion.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AccordionProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createAccordionProps, localProps] = $derived(
    createSplitProps<CreateAccordionProps>([
      'collapsible',
      'defaultValue',
      'disabled',
      'id',
      'ids',
      'multiple',
      'onFocusChange',
      'onValueChange',
      'orientation',
      'value',
    ])(rest),
  );

  let accordion = createAccordion(reflect(() => createAccordionProps));
  let mergedProps = $derived(mergeProps(accordion.getRootProps(), localProps));

  setAccordionContext(accordion);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, accordion)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(accordion)}
  </div>
{/if}
