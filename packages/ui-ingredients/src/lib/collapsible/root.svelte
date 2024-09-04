<script lang="ts" module>
  import type {Assign, IngredientProps} from '$lib/types.js';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<
      IngredientProps<'div', CreateCollapsibleReturn>,
      CreateCollapsibleProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setCollapsibleContext} from './context.svelte.js';
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

  let collapsible = createCollapsible(reflect(() => collapsibleProps));

  let mergedProps = $derived(
    mergeProps(otherProps, collapsible.getRootProps()),
  );

  setCollapsibleContext(collapsible);
</script>

{#if asChild}
  {@render asChild(mergedProps, collapsible)}
{:else}
  <div {...mergedProps}>
    {@render children?.(collapsible)}
  </div>
{/if}
