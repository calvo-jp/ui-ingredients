<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSelectContext,
    useSelectItemGroupPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: SelectItemGroupLabelProps = $props();

  let context = useSelectContext();

  let itemGroupProps = useSelectItemGroupPropsContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemGroupLabelProps({htmlFor: itemGroupProps.id}),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
