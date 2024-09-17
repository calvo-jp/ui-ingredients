<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTabsProps,
    CreateTabsReturn,
  } from './create-tabs.svelte.js';

  export interface TabsProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTabsReturn>,
      CreateTabsProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createTabs} from './create-tabs.svelte.js';
  import {setTabsContext} from './tabs-context.svelte.js';

  let {this: e, asChild, children, ...props}: TabsProps = $props();

  let [tabsProps, localProps] = $derived(
    createSplitProps<CreateTabsProps>([
      'id',
      'ids',
      'value',
      'loopFocus',
      'composite',
      'orientation',
      'translations',
      'activationMode',
      'onFocusChange',
      'onValueChange',
    ])(props),
  );

  let tabs = createTabs(reflect(() => tabsProps));

  let mergedProps = $derived(mergeProps(localProps, tabs.getRootProps()));

  setTabsContext(tabs);
</script>

{#if asChild}
  {@render asChild(mergedProps, tabs)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(tabs)}
  </div>
{/if}
