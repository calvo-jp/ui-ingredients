<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateToggleGroupProps> {
    asChild?: AsChild<CreateToggleGroupReturn>;
    children?: Snippet<[CreateToggleGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setToggleGroupContext} from './context.svelte.js';
  import {createToggleGroup} from './create-toggle-group.svelte.js';

  let {asChild, children, ...props}: ToggleGroupProps = $props();

  let [toggleGroupProps, otherProps] = $derived(
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
    mergeProps(otherProps, toggleGroup.getRootProps()),
  );

  setToggleGroupContext(toggleGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, toggleGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(toggleGroup)}
  </div>
{/if}
