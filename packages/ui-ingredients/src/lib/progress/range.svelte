<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressRangeProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressRangeProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getRangeProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
