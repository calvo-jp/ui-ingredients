<script lang="ts" module>
  import {mergeProps} from '../merge-props.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ComboboxTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      TriggerProps
    > {}
</script>

<script lang="ts">
  import type {TriggerProps} from '@zag-js/combobox';
  import {createSplitProps} from '../create-split-props.js';
  import {getComboboxContext} from './combobox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxTriggerProps = $props();

  let [triggerProps, localProps] = $derived(
    createSplitProps<TriggerProps>(['focusable'])(props),
  );

  let combobox = getComboboxContext();
  let mergedProps = $derived(
    mergeProps(combobox.getTriggerProps(triggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
