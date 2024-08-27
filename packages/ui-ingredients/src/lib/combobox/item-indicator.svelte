<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, combobox.getItemIndicatorProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
