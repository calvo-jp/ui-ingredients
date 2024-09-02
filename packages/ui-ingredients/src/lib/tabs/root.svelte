<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTabsProps,
    CreateTabsReturn,
  } from './create-tabs.svelte.js';

  export interface TabsProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTabsProps> {
    asChild?: AsChild<CreateTabsReturn>;
    children?: Snippet<[CreateTabsReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTabsContext} from './context.svelte.js';
  import {createTabs} from './create-tabs.svelte.js';

  let {asChild, children, ...props}: TabsProps = $props();

  let [tabsProps, otherProps] = $derived(
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

  let mergedProps = $derived(mergeProps(otherProps, tabs.getRootProps()));

  setTabsContext(tabs);
</script>

{#if asChild}
  {@render asChild(mergedProps, tabs)}
{:else}
  <div {...mergedProps}>
    {@render children?.(tabs)}
  </div>
{/if}
