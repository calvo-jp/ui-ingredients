<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputDecrementTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputDecrementTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getDecrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
