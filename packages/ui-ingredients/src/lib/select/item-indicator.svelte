<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSelectContext,
    useSelectItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let context = useSelectContext();

  let itemProps = useSelectItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemProps)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
