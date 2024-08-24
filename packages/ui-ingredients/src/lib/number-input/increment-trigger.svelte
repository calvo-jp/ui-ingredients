<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputIncrementTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputIncrementTriggerProps = $props();

  let context = numberInputContext.get();

  let attrs = $derived(mergeProps(props, context.getIncrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
