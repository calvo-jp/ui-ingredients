<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputScrubberProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputScrubberProps = $props();

  let context = numberInputContext.get();

  let attrs = $derived(mergeProps(props, context.getScrubberProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
