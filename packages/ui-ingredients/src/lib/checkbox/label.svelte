<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCheckboxContext} from './context.svelte.js';

  let {children, ...props}: CheckboxLabelProps = $props();

  let context = useCheckboxContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
