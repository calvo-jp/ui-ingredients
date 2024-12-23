<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateToggleGroupReturn>,
      CreateToggleGroupProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createToggleGroup} from './create-toggle-group.svelte.js';
  import {setToggleGroupContext} from './toggle-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToggleGroupProps = $props();

  let [createToggleGroupProps, localProps] = $derived(
    createSplitProps<CreateToggleGroupProps>([
      'id',
      'ids',
      'value',
      'disabled',
      'multiple',
      'loopFocus',
      'rovingFocus',
      'orientation',
      'onValueChange',
    ])(props),
  );

  let toggleGroup = createToggleGroup(reflect(() => createToggleGroupProps));

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
