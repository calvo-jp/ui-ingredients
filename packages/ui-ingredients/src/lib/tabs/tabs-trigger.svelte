<script lang="ts" module>
  import type {TriggerProps} from '@zag-js/tabs';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  interface TriggerState {
    selected: boolean;
    focused: boolean;
    disabled: boolean;
  }

  export interface TabsTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement, TriggerState>,
      TriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
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
  let triggerState = $derived(tabs.getTriggerState(triggerProps));
  let mergedProps = $derived(
    mergeProps(tabs.getTriggerProps(triggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, triggerState)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.(triggerState)}
  </button>
{/if}
