<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SelectValueTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {#if children}
      {@render children?.()}
    {:else if select.value.length}
      {select.valueAsString}
    {:else}
      {placeholder}
    {/if}
  </div>
{/if}
