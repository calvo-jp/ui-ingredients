<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectContentProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
