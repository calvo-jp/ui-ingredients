<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext, useTimerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemLabelProps = $props();

  let context = useTimerContext();

  let itemProps = useTimerItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemLabelProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
