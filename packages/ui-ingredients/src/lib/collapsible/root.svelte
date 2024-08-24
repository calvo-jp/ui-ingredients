<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCollapsibleProps,
    CreateCollapsibleReturn,
  } from './create-collapsible.svelte.js';

  export interface CollapsibleProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateCollapsibleProps> {
    children?: Snippet<[api: CreateCollapsibleReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {collapsibleContext} from './context.svelte.js';
  import {createCollapsible} from './create-collapsible.svelte.js';

  let {
    id,
    ids,
    open,
    disabled,
    onOpenChange,
    onExitComplete,
    children,
    ...props
  }: CollapsibleProps = $props();

  let context = createCollapsible({
    id,
    ids,
    open,
    disabled,
    onOpenChange,
    onExitComplete,
  });

  let mergedProps = $derived(mergeProps(props, context.getRootProps()));

  collapsibleContext.set(context);
</script>

<div {...mergedProps}>
  {@render children?.(context)}
</div>
