<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressCircleProps extends HtmlProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getCircleProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
