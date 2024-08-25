<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectIndicatorProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getIndicatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
