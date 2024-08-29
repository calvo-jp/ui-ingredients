<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SelectContentProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectContentProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
