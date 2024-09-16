<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getMenuContext,
    getMenuItemGroupPropsContext,
  } from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: MenuItemGroupLabelProps = $props();

  let menu = getMenuContext();

  let itemGroupProps = getMenuItemGroupPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      menu.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
