<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectTriggerProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
