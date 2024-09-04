<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CheckboxIndicatorProps extends IngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxIndicatorProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
