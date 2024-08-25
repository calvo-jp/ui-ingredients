<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, combobox.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
