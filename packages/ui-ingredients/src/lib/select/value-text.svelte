<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectValueTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, placeholder, ...props}: SelectValueTextProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getValueTextProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children?.()}
    {:else if select.value.length}
      {select.valueAsString}
    {:else}
      {placeholder}
    {/if}
  </span>
{/if}
