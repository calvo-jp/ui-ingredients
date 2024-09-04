<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxLabelProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
