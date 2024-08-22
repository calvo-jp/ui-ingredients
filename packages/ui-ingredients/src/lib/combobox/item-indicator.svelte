<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useComboboxContext,
    useComboboxItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let context = useComboboxContext();

  let itemProps = useComboboxItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemProps)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
