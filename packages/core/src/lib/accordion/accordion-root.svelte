<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
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
      'id',
      'ids',
      'value',
      'disabled',
      'multiple',
      'orientation',
      'collapsible',
      'onFocusChange',
      'onValueChange',
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
