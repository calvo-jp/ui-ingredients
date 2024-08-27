<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuContextTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuContextTriggerProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getContextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
