<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupContextProps,
    CreateToggleGroupContextReturn,
  } from './context.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateToggleGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateToggleGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createToggleGroupContext,
    setToggleGroupContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    value,
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: ToggleGroupProps = $props();

  let context = createToggleGroupContext({
    id: id ?? uuid(),
    ids,
    dir,
    value: $state.snapshot(value),
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setToggleGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
