<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectListProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectListProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
