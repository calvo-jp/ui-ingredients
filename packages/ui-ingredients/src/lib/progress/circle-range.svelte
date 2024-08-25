<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressCircleRangeProps extends HtmlProps<'circle'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleRangeProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getCircleRangeProps()));
</script>

<circle {...attrs}>
  {@render children?.()}
</circle>
