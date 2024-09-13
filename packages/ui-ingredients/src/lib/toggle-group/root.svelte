<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      HtmlIngredientProps<'div', CreateToggleGroupReturn>,
      CreateToggleGroupProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setToggleGroupContext} from './context.svelte.js';
  import {createToggleGroup} from './create-toggle-group.svelte.js';

  let {this: e, asChild, children, ...props}: ToggleGroupProps = $props();

  let [toggleGroupProps, localProps] = $derived(
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

  let toggleGroup = createToggleGroup(reflect(() => toggleGroupProps));

  let mergedProps = $derived(
    mergeProps(localProps, toggleGroup.getRootProps()),
  );

  setToggleGroupContext(toggleGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, toggleGroup)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(toggleGroup)}
  </div>
{/if}
