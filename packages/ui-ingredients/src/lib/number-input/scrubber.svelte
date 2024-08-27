<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputScrubberProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputScrubberProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getScrubberProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
