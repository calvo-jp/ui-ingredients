<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CheckboxLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {checkboxContext} from './context.svelte.js';

  let {children, ...props}: CheckboxLabelProps = $props();

  let context = checkboxContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
