<script lang="ts" module>
  import type {InputProps} from '@zag-js/listbox';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ListboxInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      InputProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getListboxContext} from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxInputProps = $props();

  let [inputProps, localProps] = $derived(
    createSplitProps<InputProps>(['autoHighlight'])(props),
  );

  let listbox = getListboxContext();

  let mergedProps = $derived(
    mergeProps(listbox.getInputProps(inputProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
