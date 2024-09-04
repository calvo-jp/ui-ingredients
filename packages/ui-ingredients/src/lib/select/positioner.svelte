<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectPositionerProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
