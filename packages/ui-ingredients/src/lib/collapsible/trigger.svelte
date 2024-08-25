<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CollapsibleTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {collapsibleContext} from './context.svelte.js';

  let {children, ...props}: CollapsibleTriggerProps = $props();

  let context = collapsibleContext.get();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
