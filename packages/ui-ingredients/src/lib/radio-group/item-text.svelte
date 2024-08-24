<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupItemTextProps = $props();

  let context = radioGroupContext.get();

  let itemProps = radioGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
