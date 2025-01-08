<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectListProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSelectContext} from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectListProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(select.getListProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
