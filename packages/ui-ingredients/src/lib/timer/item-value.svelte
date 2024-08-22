<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemValueProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext, useTimerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemValueProps = $props();

  let context = useTimerContext();

  let itemProps = useTimerItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemValueProps(itemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.formattedTime[itemProps.type]}
  {/if}
</span>
