<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateTabsContextProps} from './context.svelte.js';

  export interface TabsProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateTabsContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createTabsContext, setTabsContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    value,
    loopFocus,
    composite,
    orientation,
    translations,
    activationMode,
    onFocusChange,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: TabsProps = $props();

  let context = createTabsContext({
    id,
    ids,
    dir,
    value: $state.snapshot(value),
    loopFocus,
    composite,
    orientation,
    translations,
    activationMode,
    onFocusChange,
    onValueChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setTabsContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
