<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {checkboxContext} from './context.svelte.js';

  let {children, ...props}: CheckboxIndicatorProps = $props();

  let context = checkboxContext.get();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
