<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSelectContext} from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectTriggerProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(
    mergeProps({'aria-expanded': false}, select.getTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
