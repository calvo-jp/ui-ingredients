<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ProgressTrackProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressTrackProps = $props();

  let context = progressContext.get();

  let attrs = $derived(mergeProps(props, context.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
