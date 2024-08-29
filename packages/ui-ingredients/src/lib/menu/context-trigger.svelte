<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface MenuContextTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuContextTriggerProps = $props();

  let menu = menuContext.get();

  let attrs = $derived(mergeProps(props, menu.getContextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
