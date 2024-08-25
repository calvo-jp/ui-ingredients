<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectLabelProps = $props();

  let select = selectContext.get();

  let attrs = $derived(mergeProps(props, select.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
