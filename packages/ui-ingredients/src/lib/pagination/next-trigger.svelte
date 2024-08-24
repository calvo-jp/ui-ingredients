<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PaginationNextTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {paginationContext} from './context.svelte.js';

  let {children, ...props}: PaginationNextTriggerProps = $props();

  let context = paginationContext.get();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
