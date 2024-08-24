<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ProgressCircleProps extends HtmlIngredientProps<'svg'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleProps = $props();

  let context = progressContext.get();

  let attrs = $derived(mergeProps(props, context.getCircleProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
