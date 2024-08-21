<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputLabelProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
