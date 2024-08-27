<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateAccordionProps, CreateAccordionReturn} from './create-accordion.svelte.js';

  export interface AccordionProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateAccordionProps> {
    asChild?: Snippet<
      [attrs: Omit<HtmlProps<'div'>, 'children'>, accordion: CreateAccordionReturn]
    >;
    children?: Snippet<[accordion: CreateAccordionReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {accordionContext} from './context.svelte.js';
  import {createAccordion} from './create-accordion.svelte.js';

  let {
    id,
    ids,
    value,
    disabled,
    multiple,
    orientation,
    collapsible,
    onFocusChange,
    onValueChange,
    asChild,
    children,
    ...props
  }: AccordionProps = $props();

  let accordion = createAccordion({
    id,
    ids,
    value: $state.snapshot(value),
    multiple,
    disabled,
    collapsible,
    orientation,
    onFocusChange,
    onValueChange,
  });

  let attrs = $derived(mergeProps(props, accordion.getRootProps()));

  accordionContext.set(accordion);
</script>

{#if asChild}
  {@render asChild(attrs, accordion)}
{:else}
  <div {...attrs}>
    {@render children?.(accordion)}
  </div>
{/if}
