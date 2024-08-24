<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectValueTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, placeholder, ...props}: SelectValueTextProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getValueTextProps()));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else if context.value.length}
    {context.valueAsString}
  {:else}
    {placeholder}
  {/if}
</span>
