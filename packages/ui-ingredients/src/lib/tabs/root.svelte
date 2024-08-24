<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTabsProps, CreateTabsReturn} from './create-tabs.svelte.js';

  export interface TabsProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTabsProps> {
    children?: Snippet<[api: CreateTabsReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
    children,
    ...props
  }: TabsProps = $props();

  let context = createTabs({
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  tabsContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
