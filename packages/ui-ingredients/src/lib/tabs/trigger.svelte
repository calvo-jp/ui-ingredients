<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TriggerProps} from '@zag-js/tabs';

  export interface TabsTriggerProps
    extends Assign<HtmlIngredientProps<'button'>, TriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getTabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsTriggerProps = $props();

  let tabs = getTabsContext();

  let [triggerProps, otherProps] = $derived(
    createSplitProps<TriggerProps>(['value', 'disabled'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, tabs.getTriggerProps(triggerProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
