<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ContentProps> {}
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
  }: TabsContentProps = $props();

  let tabs = getTabsContext();

  let [contentProps, localProps] = $derived(
    createSplitProps<ContentProps>(['value'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, tabs.getContentProps(contentProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
