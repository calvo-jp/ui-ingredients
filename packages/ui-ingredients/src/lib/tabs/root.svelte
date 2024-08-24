<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTabsContextProps, CreateTabsContextReturn} from './context.svelte.js';

  export interface TabsProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateTabsContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateTabsContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createTabsContext({
    id: id ?? createUniqueId(),
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
