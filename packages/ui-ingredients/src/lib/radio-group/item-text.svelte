<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: RadioGroupItemTextProps = $props();

  let context = useRadioGroupContext();

  let itemProps = useRadioGroupItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
