<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuArrowTipProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuArrowTipProps = $props();

  let menu = getMenuContext();

  let mergedProps = $derived(mergeProps(props, menu.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
