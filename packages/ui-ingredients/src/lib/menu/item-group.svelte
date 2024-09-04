<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuItemGroupProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {uid} from 'uid';
  import {
    getMenuContext,
    setMenuItemGroupPropsContext,
  } from './context.svelte.js';

  let {id, asChild, children, ...props}: MenuItemGroupProps = $props();

  let menu = getMenuContext();

  let id_ = uid();

  let itemGroupProps = $derived({
    id: id ?? id_,
  });

  let mergedProps = $derived(
    mergeProps(props, menu.getItemGroupProps(itemGroupProps)),
  );

  setMenuItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
