<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxControlProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
