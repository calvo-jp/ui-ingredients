<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTabsContextProps,
    CreateTabsContextReturn,
  } from './context.svelte.js';

  export interface TabsProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateTabsContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateTabsContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createTabsContext, setTabsContext} from './context.svelte.js';

  let {
    id,
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

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createTabsContext({
    id: id ?? uuid(),
    ids,
    dir: dir ?? localeContext?.dir,
    value: $state.snapshot(value),
    loopFocus,
    composite,
    orientation,
    translations,
    activationMode,
    onFocusChange,
    onValueChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setTabsContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
