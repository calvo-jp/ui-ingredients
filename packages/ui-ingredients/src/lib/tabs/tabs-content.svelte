<script lang="ts" module>
  import type {ContentProps} from '@zag-js/tabs';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TabsContentProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ContentProps> {}
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
  }: TabsContentProps = $props();

  let [contentProps, localProps] = $derived(
    createSplitProps<ContentProps>(['value'])(props),
  );

  let tabs = getTabsContext();
  let mergedProps = $derived(
    mergeProps(tabs.getContentProps(contentProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
