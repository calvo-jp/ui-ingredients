<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateCollapsibleProps> {
    asChild?: AsChild<CreateCollapsibleReturn>;
    children?: Snippet<[CreateCollapsibleReturn]>;
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

  let mergedProps = $derived(mergeProps(props, collapsible.getRootProps()));

  collapsibleContext.set(collapsible);
</script>

{#if asChild}
  {@render asChild(mergedProps, collapsible)}
{:else}
  <div {...mergedProps}>
    {@render children?.(collapsible)}
  </div>
{/if}
