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
  } from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuItemGroupLabelProps = $props();

  let menu = getMenuContext();

  let itemGroupProps = getMenuItemGroupPropsContext();

  let mergedProps = $derived(
    mergeProps(
      menu!.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
