<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps
    extends HtmlIngredientsProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext, useSelectItemContext} from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let context = useSelectContext();
  let itemContext = useSelectItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemContext)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
