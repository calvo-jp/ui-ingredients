<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateAccordionProps, CreateAccordionReturn} from './create-accordion.svelte.js';

  export interface AccordionProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateAccordionProps> {
    asChild?: AsChild<CreateAccordionReturn>;
    children?: Snippet<[CreateAccordionReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
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

  let accordion = createAccordion(accordionProps);
  let mergedProps = mergeProps(otherProps, accordion.getRootProps());

  accordionContext.set(accordion);
</script>

{#if asChild}
  {@render asChild(mergedProps, accordion)}
{:else}
  <div {...mergedProps}>
    {@render children?.(accordion)}
  </div>
{/if}
