<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface MenuArrowTipProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuArrowTipProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
