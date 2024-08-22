<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputScrubberProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputScrubberProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.getScrubberProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
