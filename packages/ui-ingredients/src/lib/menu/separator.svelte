<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuSeparatorProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuSeparatorProps = $props();

  let context = menuContext.get();

  let attrs = $derived(mergeProps(props, context.getSeparatorProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
