<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateToggleGroupProps> {
    children?: Snippet<[api: CreateToggleGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toggleGroupContext} from './context.svelte.js';
  import {createToggleGroup} from './create-toggle-group.svelte.js';

  let {
    id,
    ids,
    value,
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    children,
    ...props
  }: ToggleGroupProps = $props();

  let toggleGroup = createToggleGroup({
    id,
    ids,
    value: $state.snapshot(value),
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
  });

  let attrs = $derived(mergeProps(props, toggleGroup.getRootProps()));

  toggleGroupContext.set(toggleGroup);
</script>

<div {...attrs}>
  {@render children?.(toggleGroup)}
</div>
