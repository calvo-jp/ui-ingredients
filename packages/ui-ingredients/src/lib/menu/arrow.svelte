<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuArrowProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useMenuContext} from './context.svelte.js';

  let {children, ...props}: MenuArrowProps = $props();

  let context = useMenuContext();

  let attrs = $derived(mergeProps(props, context.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
