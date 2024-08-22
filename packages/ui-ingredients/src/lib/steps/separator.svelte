<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsSeparatorProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext, useStepsItemPropsContext} from './context.svelte.js';

  let {children, ...props}: StepsSeparatorProps = $props();

  let context = useStepsContext();

  let itemProps = useStepsItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getSeparatorProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
