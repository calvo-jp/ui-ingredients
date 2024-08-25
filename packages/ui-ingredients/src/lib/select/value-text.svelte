<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectValueTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, placeholder, ...props}: SelectValueTextProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getValueTextProps()));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else if select.value.length}
    {select.valueAsString}
  {:else}
    {placeholder}
  {/if}
</span>
