<script lang="ts" module>
  import type {TriggerProps} from '@zag-js/tabs';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TabsTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      TriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {getTabsContext} from './tabs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TabsTriggerProps = $props();

  let [triggerProps, localProps] = $derived(
    createSplitProps<TriggerProps>(['value', 'disabled'])(props),
  );

  let tabs = getTabsContext();
  let mergedProps = $derived(
    mergeProps(tabs.getTriggerProps(triggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
