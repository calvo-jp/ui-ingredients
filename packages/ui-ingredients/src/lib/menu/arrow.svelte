<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuArrowProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuArrowProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
