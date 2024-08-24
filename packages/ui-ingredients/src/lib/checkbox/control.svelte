<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {checkboxContext} from './context.svelte.js';

  let {children, ...props}: CheckboxControlProps = $props();

  let context = checkboxContext.get();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
