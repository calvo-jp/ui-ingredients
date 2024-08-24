<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemLabelProps = $props();

  let context = timerContext.get();

  let itemProps = timerItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemLabelProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
