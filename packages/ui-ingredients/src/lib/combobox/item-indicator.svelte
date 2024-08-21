<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps
    extends HtmlIngredientsProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useComboboxContext,
    useComboboxItemContext,
  } from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let context = useComboboxContext();
  let itemContext = useComboboxItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemContext)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
