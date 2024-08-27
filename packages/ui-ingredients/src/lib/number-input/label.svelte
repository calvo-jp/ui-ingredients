<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputLabelProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
