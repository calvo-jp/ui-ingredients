<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateAccordionProps,
    CreateAccordionReturn,
  } from './create-accordion.svelte.js';

  export interface AccordionProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateAccordionReturn>,
        Optional<CreateAccordionProps, 'id'>
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
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: AccordionProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, otherProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let [createAccordionProps, localProps] = $derived(
    createSplitProps<Omit<CreateAccordionProps, 'id'>>([
      'collapsible',
      'defaultValue',
      'disabled',
      'ids',
      'multiple',
      'onFocusChange',
      'onValueChange',
      'orientation',
      'value',
    ])(otherProps),
  );

  let accordion = createAccordion(
    reflect(() => ({...createAccordionProps, id: id ?? uid})),
  );

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
