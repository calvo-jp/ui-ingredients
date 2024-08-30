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
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {collapsibleContext} from './context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {asChild, children, ...props}: CollapsibleProps = $props();

  let [collapsibleProps, otherProps] = $derived(
    createSplitProps<CreateCollapsibleProps>([
      'id',
      'ids',
      'open',
      'disabled',
      'defaultOpen',
      'onOpenChange',
      'onExitComplete',
    ])(props),
  );

  let collapsible = createCollapsible(collapsibleProps);

  let mergedProps = $derived(
    mergeProps(otherProps, collapsible.getRootProps()),
  );

  collapsibleContext.set(collapsible);
</script>

{#if asChild}
  {@render asChild(mergedProps, collapsible)}
{:else}
  <div {...mergedProps}>
    {@render children?.(collapsible)}
  </div>
{/if}
