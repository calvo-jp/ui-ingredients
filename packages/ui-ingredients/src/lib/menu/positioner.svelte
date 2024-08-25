<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext} from './context.svelte.js';

  let {children, ...props}: MenuPositionerProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
