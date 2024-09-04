<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectControlProps = $props();

  let select = getSelectContext();

  let mergedProps = $derived(mergeProps(props, select.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
