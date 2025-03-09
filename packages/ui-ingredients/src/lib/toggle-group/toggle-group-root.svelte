<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateToggleGroupReturn>,
      Optional<CreateToggleGroupProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createToggleGroup} from './create-toggle-group.svelte.js';
  import {setToggleGroupContext} from './toggle-group-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToggleGroupProps = $props();

  let uid = $props.id();

  let [createToggleGroupProps, localProps] = $derived(
    createSplitProps<Omit<CreateToggleGroupProps, 'id'>>([
      'defaultValue',
      'disabled',
      'ids',
      'loopFocus',
      'multiple',
      'onValueChange',
      'orientation',
      'rovingFocus',
      'value',
    ])(props),
  );

  let toggleGroup = createToggleGroup(
    reflect(() => ({...createToggleGroupProps, id: id ?? uid})),
  );

  let mergedProps = $derived(
    mergeProps(toggleGroup.getRootProps(), localProps),
  );

  setToggleGroupContext(toggleGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, toggleGroup)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(toggleGroup)}
  </div>
{/if}
