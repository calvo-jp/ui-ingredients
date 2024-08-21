<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCheckboxContext} from './context.svelte.js';

  let {children, ...props}: CheckboxControlProps = $props();

  let context = useCheckboxContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
