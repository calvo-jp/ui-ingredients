<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemControlProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemContext,
  } from './context.svelte.js';

  let {children, ...props}: RadioGroupItemControlProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemControlProps(itemContext)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
