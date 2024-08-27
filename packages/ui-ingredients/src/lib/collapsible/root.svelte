<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateCollapsibleProps> {
    asChild?: Snippet<
      [attrs: Omit<HtmlProps<'button'>, 'children'>, collapsible: CreateCollapsibleReturn]
    >;
    children?: Snippet<[collapsible: CreateCollapsibleReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {collapsibleContext} from './context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {
    id,
    ids,
    open,
    disabled,
    defaultOpen,
    onOpenChange,
    onExitComplete,
    asChild,
    children,
    ...props
  }: CollapsibleProps = $props();

  let collapsible = createCollapsible({
    id,
    ids,
    open,
    disabled,
    defaultOpen,
    onOpenChange,
    onExitComplete,
  });

  let attrs = $derived(mergeProps(props, collapsible.getRootProps()));

  collapsibleContext.set(collapsible);
</script>

{#if asChild}
  {@render asChild(attrs, collapsible)}
{:else}
  <div {...attrs}>
    {@render children?.(collapsible)}
  </div>
{/if}
