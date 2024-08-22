<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemControlProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: RadioGroupItemControlProps = $props();

  let context = useRadioGroupContext();

  let itemProps = useRadioGroupItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemControlProps(itemProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
