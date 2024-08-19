<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateTabsContextProps, CreateTabsContextReturn} from './context.svelte.js';

  export interface TabsProps
    extends Assign<WithoutChildren<SvelteHTMLElements['div']>, OptionalId<CreateTabsContextProps>> {
    children?: Snippet<[CreateTabsContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createTabsContext, setTabsContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setTabsContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
