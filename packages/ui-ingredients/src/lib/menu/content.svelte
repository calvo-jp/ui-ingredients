<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface MenuContentProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuContentProps = $props();

  let context = menuContext.get();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
