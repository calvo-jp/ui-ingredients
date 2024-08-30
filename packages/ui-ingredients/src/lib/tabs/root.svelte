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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tabsContext} from './context.svelte.js';
  import {createTabs} from './create-tabs.svelte.js';

  let {
    id,
    ids,
    value,
    loopFocus,
    composite,
    orientation,
    translations,
    activationMode,
    onFocusChange,
    onValueChange,
    asChild,
    children,
    ...props
  }: TabsProps = $props();

  let tabs = createTabs({
    id,
    ids,
    value: $state.snapshot(value),
    loopFocus,
    composite,
    orientation,
    translations,
    activationMode,
    onFocusChange,
    onValueChange,
  });

  let mergedProps = $derived(mergeProps(props, tabs.getRootProps()));

  tabsContext.set(tabs);
</script>

{#if asChild}
  {@render asChild(mergedProps, tabs)}
{:else}
  <div {...mergedProps}>
    {@render children?.(tabs)}
  </div>
{/if}
