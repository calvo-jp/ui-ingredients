<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuTriggerItemIndicatorProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuTriggerItemIndicatorProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getTriggerItemProps(menu)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
