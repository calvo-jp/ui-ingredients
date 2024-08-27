<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RadioGroupLabelProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupLabelProps = $props();

  let radioGroup = radioGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getLabelProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
