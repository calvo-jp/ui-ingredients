<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectIndicatorProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
