<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {this: e, asChild, children, ...props}: MenuArrowTipProps = $props();

  let menu = getMenuContext();

  let mergedProps = $derived(mergeProps(props, menu.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
