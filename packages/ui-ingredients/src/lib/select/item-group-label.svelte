<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSelectContext,
    useSelectItemGroupContext,
  } from './context.svelte.js';

  let {children, ...props}: SelectItemGroupLabelProps = $props();

  let context = useSelectContext();
  let itemGroupContext = useSelectItemGroupContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemGroupLabelProps({htmlFor: itemGroupContext.id}),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
