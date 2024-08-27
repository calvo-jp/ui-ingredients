<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ComboboxItemIndicatorProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemIndicatorProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, combobox.getItemIndicatorProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
