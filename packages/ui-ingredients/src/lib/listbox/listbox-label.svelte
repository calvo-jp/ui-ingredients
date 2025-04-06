<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getListboxContext} from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxLabelProps = $props();

  let listbox = getListboxContext();
  let mergedProps = $derived(mergeProps(listbox.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
