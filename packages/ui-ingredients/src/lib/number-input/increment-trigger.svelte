<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputIncrementTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputIncrementTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getIncrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
