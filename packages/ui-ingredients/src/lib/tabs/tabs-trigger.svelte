<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';

  export interface TabsTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      TriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getTabsContext} from './tabs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TabsTriggerProps = $props();

  let tabs = getTabsContext();

  let [triggerProps, localProps] = $derived(
    createSplitProps<TriggerProps>(['value', 'disabled'])(props),
  );

  let mergedProps = $derived(
    mergeProps(tabs.getTriggerProps(triggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
