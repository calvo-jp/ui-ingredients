<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemValueProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemValueProps = $props();

  let context = timerContext.get();

  let itemProps = timerItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemValueProps(itemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.formattedTime[itemProps.type]}
  {/if}
</span>
