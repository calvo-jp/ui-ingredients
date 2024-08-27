<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuTriggerItemIndicatorProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuTriggerItemIndicatorProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getTriggerItemProps(menu)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
