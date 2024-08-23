<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuArrowTipProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useMenuContext} from './context.svelte.js';

  let {children, ...props}: MenuArrowTipProps = $props();

  let context = useMenuContext();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
