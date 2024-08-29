<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SelectClearTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectClearTriggerProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getClearTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
