<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface StepsCompletedContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';

  let {children, ...props}: StepsCompletedContentProps = $props();

  let steps = stepsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      steps.getContentProps({
        index: steps.count,
      }),
    ),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
