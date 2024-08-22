<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCollapsibleContextProps,
    CreateCollapsibleContextReturn,
  } from './context.svelte.js';

  export interface CollapsibleProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateCollapsibleContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateCollapsibleContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createCollapsibleContext,
    setCollapsibleContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    open,
    'open.controlled': openControlled,
    disabled,
    onOpenChange,
    onExitComplete,
    getRootNode,
    children,
    ...props
  }: CollapsibleProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createCollapsibleContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    open,
    'open.controlled': openControlled,
    disabled,
    onOpenChange,
    onExitComplete,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let mergedProps = $derived(mergeProps(props, context.getRootProps()));

  setCollapsibleContext(context);
</script>

<div {...mergedProps}>
  {@render children?.(context)}
</div>
