<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuOptionItemTextProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getMenuContext,
    getMenuOptionItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: MenuOptionItemTextProps = $props();

  let context = getMenuContext();

  let optionItemProps = getMenuOptionItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemTextProps(optionItemProps)),
  );
</script>

<span {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {optionItemProps.valueText}
  {/if}
</span>
