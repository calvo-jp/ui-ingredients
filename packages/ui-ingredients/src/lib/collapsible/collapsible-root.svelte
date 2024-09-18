<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateCollapsibleReturn>,
      CreateCollapsibleProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setCollapsibleContext} from './collapsible-context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {this: e, asChild, children, ...props}: CollapsibleProps = $props();

  let [createCollapsibleProps, localProps] = $derived(
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

  let collapsible = createCollapsible(reflect(() => createCollapsibleProps));

  let mergedProps = $derived(
    mergeProps(localProps, collapsible.getRootProps()),
  );

  setCollapsibleContext(collapsible);
</script>

{#if asChild}
  {@render asChild(mergedProps, collapsible)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(collapsible)}
  </div>
{/if}
