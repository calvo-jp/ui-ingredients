<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxControlProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
