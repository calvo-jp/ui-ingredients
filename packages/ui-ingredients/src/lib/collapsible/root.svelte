<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateCollapsibleProps, 'id'>
    > {
    children?: Snippet<[api: CreateCollapsibleReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {collapsibleContext} from './context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createCollapsible({
    id: id ?? uid,
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

  collapsibleContext.set(context);
</script>

<div {...mergedProps}>
  {@render children?.(context)}
</div>
