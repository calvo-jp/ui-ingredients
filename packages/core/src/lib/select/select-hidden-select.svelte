<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectHiddenSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSelectContext} from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectHiddenSelectProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(select.getHiddenSelectProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </select>
{/if}
