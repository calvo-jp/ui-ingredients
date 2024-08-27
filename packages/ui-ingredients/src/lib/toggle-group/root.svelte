<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateToggleGroupProps> {
    asChild?: Snippet<
      [attrs: Omit<GenericHtmlProps, 'children'>, toggleGroup: CreateToggleGroupReturn]
    >;
    children?: Snippet<[toggleGroup: CreateToggleGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
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

{#if asChild}
  {@render asChild(attrs, toggleGroup)}
{:else}
  <div {...attrs}>
    {@render children?.(toggleGroup)}
  </div>
{/if}
