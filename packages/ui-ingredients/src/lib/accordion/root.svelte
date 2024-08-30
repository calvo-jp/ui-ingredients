<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateAccordionProps,
    CreateAccordionReturn,
  } from './create-accordion.svelte.js';

  export interface AccordionProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateAccordionProps> {
    asChild?: AsChild<CreateAccordionReturn>;
    children?: Snippet<[CreateAccordionReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {accordionContext} from './context.svelte.js';
  import {createAccordion} from './create-accordion.svelte.js';

  let {asChild, children, ...props}: AccordionProps = $props();

  let [accordionProps, otherProps] = $derived(
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
    ])(props),
  );

  let accordion = createAccordion(reflect(() => accordionProps));

  let mergedProps = $derived(mergeProps(otherProps, accordion.getRootProps()));

  accordionContext.set(accordion);
</script>

{#if asChild}
  {@render asChild(mergedProps, accordion)}
{:else}
  <div {...mergedProps}>
    {@render children?.(accordion)}
  </div>
{/if}
