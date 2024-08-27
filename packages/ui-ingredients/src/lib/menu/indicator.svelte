<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuIndicatorProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getIndicatorProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
