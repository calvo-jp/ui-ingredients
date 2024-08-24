<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressLabelProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressLabelProps = $props();

  let context = progressContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
