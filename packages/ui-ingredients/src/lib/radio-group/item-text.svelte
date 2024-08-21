<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps
    extends HtmlIngredientsProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemContext,
  } from './context.svelte.js';

  let {children, ...props}: RadioGroupItemTextProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemTextProps(itemContext)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
