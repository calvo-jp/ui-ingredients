<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RadioGroupIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupIndicatorProps = $props();

  let radioGroup = radioGroupContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
