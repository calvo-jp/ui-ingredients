<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressTrackProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressTrackProps = $props();

  let progress = progressContext.get();

  let attrs = $derived(mergeProps(props, progress.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
