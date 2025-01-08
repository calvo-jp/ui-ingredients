<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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
      'disabled',
      'id',
      'ids',
      'loopFocus',
      'multiple',
      'onValueChange',
      'orientation',
      'rovingFocus',
      'value',
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
