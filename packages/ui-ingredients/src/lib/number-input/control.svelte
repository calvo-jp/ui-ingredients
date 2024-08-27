<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputControlTriggerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputControlTriggerProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
