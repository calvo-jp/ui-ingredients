<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateToggleProps,
    CreateToggleReturn,
  } from './create-toggle.svelte.js';

  export interface ToggleProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement, CreateToggleReturn>,
      CreateToggleProps
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createToggle} from './create-toggle.svelte.js';
  import {setToggleContext} from './toggle-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToggleProps = $props();

  let [createToggleProps, localProps] = $derived(
    createSplitProps<CreateToggleProps>([
      'disabled',
      'onPressedChange',
      'pressed',
    ])(props),
  );

  let toggle = createToggle(reflect(() => createToggleProps));
  let mergedProps = $derived(mergeProps(toggle.getRootProps(), localProps));

  setToggleContext(toggle);
</script>

{#if asChild}
  {@render asChild(mergedProps, toggle)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.(toggle)}
  </button>
{/if}
