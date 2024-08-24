<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps extends Assign<HtmlIngredientProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {type, children, ...props}: TimerItemProps = $props();

  let context = timerContext.get();

  let itemProps = $derived({
    type,
  });

  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps)));

  timerItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
