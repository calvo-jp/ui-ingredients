<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuIndicatorProps = $props();

  let menu = getMenuContext();

  let mergedProps = $derived(mergeProps(props, menu.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
