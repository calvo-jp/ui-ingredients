<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectControlProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
