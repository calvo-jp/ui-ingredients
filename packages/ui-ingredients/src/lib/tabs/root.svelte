<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTabsProps, CreateTabsReturn} from './create-tabs.svelte.js';

  export interface TabsProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTabsProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>, tabs: CreateTabsReturn]>;
    children?: Snippet<[tabs: CreateTabsReturn]>;
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

  let attrs = $derived<Record<string, any>>(mergeProps(props, tabs.getRootProps()));

  tabsContext.set(tabs);
</script>

{#if asChild}
  {@render asChild(attrs, tabs)}
{:else}
  <div {...attrs}>
    {@render children?.(tabs)}
  </div>
{/if}
