<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createTabs} from './create-tabs.svelte.js';
  import {setTabsContext} from './tabs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TabsProps = $props();

  let [createTabsProps, localProps] = $derived(
    createSplitProps<CreateTabsProps>([
      'activationMode',
      'composite',
      'deselectable',
      'id',
      'ids',
      'loopFocus',
      'navigate',
      'onFocusChange',
      'onValueChange',
      'orientation',
      'translations',
      'value',
    ])(props),
  );

  let tabs = createTabs(reflect(() => createTabsProps));
  let mergedProps = $derived(mergeProps(tabs.getRootProps(), localProps));

  setTabsContext(tabs);
</script>

{#if asChild}
  {@render asChild(mergedProps, tabs)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(tabs)}
  </div>
{/if}
