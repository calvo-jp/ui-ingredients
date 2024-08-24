<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RadioGroupLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupLabelProps = $props();

  let context = radioGroupContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
